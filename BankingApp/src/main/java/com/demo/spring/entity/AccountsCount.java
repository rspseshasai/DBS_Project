package com.demo.spring.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="AccountsCount")
public class AccountsCount {
	
	@Id
	private int countOfAccounts;
	
	
	public AccountsCount(){
		
	}

	
	public AccountsCount(int countOfAccounts) {
		super();
		this.countOfAccounts = countOfAccounts;
	}
	


	public int getCountOfAccounts() {
		return countOfAccounts;
	}

	public void setCountOfAccounts(int countOfAccounts) {
		this.countOfAccounts = countOfAccounts;
	}


	
}
