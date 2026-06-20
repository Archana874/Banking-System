package com.archana.bankingapp.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.archana.bankingapp.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{
	 List<Transaction> findByCustomerId(Long customerId);
	 List<Transaction> findByCustomerIdAndType(Long customerId, String type);

	 List<Transaction> findTop5ByCustomerIdOrderByTransactionDateDesc(Long customerId);
}


