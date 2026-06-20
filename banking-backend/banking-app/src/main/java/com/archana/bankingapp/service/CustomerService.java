package com.archana.bankingapp.service;
import com.archana.bankingapp.dto.AccountStatement;
import java.util.List;
import com.archana.bankingapp.entity.Transaction;
import com.archana.bankingapp.repository.TransactionRepository;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.archana.bankingapp.exception.CustomerNotFoundException;
import com.archana.bankingapp.entity.Customer;
import com.archana.bankingapp.repository.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
    public Customer deposit(Long id, Double amount) {

    	Customer customer =
    			customerRepository.findById(id)
    			.orElseThrow(() ->
    			new CustomerNotFoundException(
    			"Customer Not Found with ID : " + id));

        if(customer != null) {

            customer.setBalance(customer.getBalance() + amount);

            Transaction transaction = new Transaction();
            transaction.setType("DEPOSIT");
            transaction.setAmount(amount);
            transaction.setTransactionDate(LocalDateTime.now());
            transaction.setCustomerId(customer.getId());

            transactionRepository.save(transaction);

            return customerRepository.save(customer);
        }

        return null;
    }
    public Customer withdraw(Long id, Double amount) {

        Customer customer = customerRepository.findById(id).orElse(null);

        if(customer != null) {

            if(customer.getBalance() >= amount) {

            	customer.setBalance(customer.getBalance() - amount);

            	Transaction transaction = new Transaction();
            	transaction.setType("WITHDRAW");
            	transaction.setAmount(amount);
            	transaction.setTransactionDate(LocalDateTime.now());
            	transaction.setCustomerId(customer.getId());

            	transactionRepository.save(transaction);

            	return customerRepository.save(customer);
            }
        }

        return null;
    }
    public String transferMoney(Long fromId, Long toId, Double amount) {

        Customer sender = customerRepository.findById(fromId).orElse(null);
        Customer receiver = customerRepository.findById(toId).orElse(null);

        if(sender == null || receiver == null) {
            return "Customer not found";
        }

        if(sender.getBalance() < amount) {
            return "Insufficient Balance";
        }

        sender.setBalance(sender.getBalance() - amount);
        Transaction senderTransaction = new Transaction();

        senderTransaction.setType("TRANSFER_OUT");
        senderTransaction.setAmount(amount);
        senderTransaction.setTransactionDate(LocalDateTime.now());
        senderTransaction.setCustomerId(sender.getId());

        transactionRepository.save(senderTransaction);
        receiver.setBalance(receiver.getBalance() + amount);
        Transaction receiverTransaction = new Transaction();

        receiverTransaction.setType("TRANSFER_IN");
        receiverTransaction.setAmount(amount);
        receiverTransaction.setTransactionDate(LocalDateTime.now());
        receiverTransaction.setCustomerId(receiver.getId());

        transactionRepository.save(receiverTransaction);

        customerRepository.save(sender);
        customerRepository.save(receiver);

        return "Transfer Successful";
    }
    public List<Transaction> getTransactions(Long customerId) {
        return transactionRepository.findByCustomerId(customerId);
    }
    public Double checkBalance(Long id) {

        Customer customer = customerRepository.findById(id).orElse(null);

        if(customer != null) {
            return customer.getBalance();
        }

        return null;
    }
    public AccountStatement getStatement(Long customerId) {

        Customer customer = customerRepository.findById(customerId).orElse(null);

        if(customer == null) {
            return null;
        }

        List<Transaction> transactions =
                transactionRepository.findByCustomerId(customerId);

        AccountStatement statement = new AccountStatement();

        statement.setCustomerName(customer.getName());
        statement.setAccountNumber(customer.getAccountNumber());
        statement.setBalance(customer.getBalance());
        statement.setTransactions(transactions);

        return statement;
    }
    public List<Transaction> getMiniStatement(Long customerId) {

        return transactionRepository
                .findTop5ByCustomerIdOrderByTransactionDateDesc(customerId);
    }
    public List<Transaction> getTransactionsByType(
            Long customerId,
            String type) {

        return transactionRepository
                .findByCustomerIdAndType(customerId, type);
    }
}
