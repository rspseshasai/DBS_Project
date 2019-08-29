package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionsReportsRepo extends JpaRepository<TransactionReports, Integer> {

}
