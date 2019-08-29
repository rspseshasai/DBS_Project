package com.demo.spring;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.Accounts;

public interface AccountsRepo extends JpaRepository<Accounts, String> {

	@Transactional
	@Modifying
	@Query("update Accounts u set u.balance = u.balance-?2 where u.accountNo=?1")
	void deductAmount(String fromAccount, double transactionAmount);

	@Transactional
	@Modifying
	@Query("update Accounts u set u.balance = u.balance+?2 where u.accountNo=?1")
	void addAmount(String toAccount, double transactionAmount);


	@Query("select u from Accounts u where u.customerId=?1")
	ArrayList<Accounts> getAccountsList(int accNo);

	@Transactional
	@Modifying
	@Query("delete from Accounts u where u.accountNo=?1")
	void removeAccount(String accNo);

	@Query("select count(u) from Accounts u where u.customerId=?1")
	int doesExists(int customerId);

	@Query("select count(u) from Accounts u where u.accountNo=?1")
	int isToAccExists(String toAccount);
	
	
	@Query(value="select u.accountNo from Accounts u where u.customerId=?1")
    ArrayList<Accounts> getAccountNum(int custId);

	@Query("select u from Accounts u where u.accountNo=?1")
	Accounts getCurrBal(String accNo);
	

}
