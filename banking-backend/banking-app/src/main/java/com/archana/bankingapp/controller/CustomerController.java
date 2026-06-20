package com.archana.bankingapp.controller;
import com.archana.bankingapp.entity.Transaction;
import java.util.List;
import com.archana.bankingapp.dto.AccountStatement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.archana.bankingapp.entity.Customer;
import com.archana.bankingapp.service.CustomerService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping
    public Customer saveCustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }
    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable Long id) {
        return customerService.getCustomerById(id);
    }
    @PostMapping("/deposit/{id}")
    public Customer depositMoney(
            @PathVariable Long id,
            @RequestParam Double amount) {

        return customerService.deposit(id, amount);
    }
    @PostMapping("/withdraw/{id}")
    public Customer withdrawMoney(
            @PathVariable Long id,
            @RequestParam Double amount) {

        return customerService.withdraw(id, amount);
    }
    @PostMapping("/transfer")
    public String transferMoney(
            @RequestParam Long fromId,
            @RequestParam Long toId,
            @RequestParam Double amount) {

        return customerService.transferMoney(fromId, toId, amount);
    }
    @GetMapping("/transactions/{customerId}")
    public List<Transaction> getTransactions(
            @PathVariable Long customerId) {

        return customerService.getTransactions(customerId);
    }
    @GetMapping("/balance/{id}")
    public Double checkBalance(@PathVariable Long id) {

        return customerService.checkBalance(id);
    }
    @GetMapping("/statement/{customerId}")
    public AccountStatement getStatement(
            @PathVariable Long customerId) {

        return customerService.getStatement(customerId);
    }
    @GetMapping("/mini-statement/{customerId}")
    public List<Transaction> getMiniStatement(
            @PathVariable Long customerId) {

        return customerService.getMiniStatement(customerId);
    }
    @GetMapping("/transactions/{customerId}/{type}")
    public List<Transaction> getTransactionsByType(
            @PathVariable Long customerId,
            @PathVariable String type) {

        return customerService
                .getTransactionsByType(customerId, type);
    }
}
