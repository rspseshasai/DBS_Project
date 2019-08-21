package com.demo.spring;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.AccountsCount;

public interface AccountsCountRepo extends JpaRepository<AccountsCount, Integer> {

	@Query("select u.countOfAccounts from AccountsCount u")
	int getAccountsCount();

	@Modifying
	@Transactional
	@Query("update AccountsCount set countOfAccounts=?1")
	void updateAccountsCount(int globalAccNo);

}
