package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.spring.entity.Transactions;

public interface TransactionRepo extends JpaRepository<Transactions, Integer> {

}
