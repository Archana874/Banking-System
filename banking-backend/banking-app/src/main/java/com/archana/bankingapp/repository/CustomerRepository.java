package com.archana.bankingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.archana.bankingapp.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}