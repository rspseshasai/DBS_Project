package com.demo.spring.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ACCOUNTS")
public class Accounts {
	
	@Id
	@Column(length=15)
	private String accountNo;

	private int customerId;
	
	private double balance;
	
	private String accountType;

	

	public Accounts(String accountNo, int customerId, double balance, String accountType) {
		super();
		this.accountNo = accountNo;
		this.customerId = customerId;
		this.balance = balance;
		this.accountType = accountType;
	}



	public String getAccountNo() {
		return accountNo;
	}



	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}



	public int getCustomerId() {
		return customerId;
	}



	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}



	public double getBalance() {
		return balance;
	}



	public void setBalance(double balance) {
		this.balance = balance;
	}



	public String getAccountType() {
		return accountType;
	}



	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}



	public Accounts() {}
	
	
}
