package com.demo.spring;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.Accounts;

public interface AccountsRepo extends JpaRepository<Accounts, String> {

	
//	@Query("select u.balance from Accounts u where u.cid=?1")
//	double getCurrBalance(int cid);
//
//	@Transactional
//	@Modifying
//	@Query("update Accounts u set u.balance = u.balance-?1 where u.cid=?2")
//	void deductAmount(double amount, int cid);
//	
//	
//	@Transactional
//	@Modifying
//	@Query("update Accounts u set u.balance = u.balance+?1 where u.cid=?2")
//	void addAmount(double amount, int toacc);
	
	

}
