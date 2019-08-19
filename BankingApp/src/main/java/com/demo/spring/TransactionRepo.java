package com.demo.spring;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.Transactions;

public interface TransactionRepo extends JpaRepository<Transactions, Integer> {

	@Query(value = "SELECT u FROM Transactions u where (fromAccount=?1 OR toAccount=?1) order by transactionDate desc")
	ArrayList<Transactions> getRecentTransactions(String accountNo);

	
	@Query(value = "SELECT u FROM Transactions u WHERE transactionDate >=?2 AND transactionDate <= ?3 AND (fromAccount=?1 OR toAccount=?1)")
	ArrayList<Transactions> getTransactionsInRange(String string, String string2, String string3);

}
