package com.demo.spring.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TRANSACTIONS")
public class Transactions {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int transactionId;
	
	private int fromAccount;
	
	private int toAccount;
	
	private double transactionAmount;
	
	private String transactionDate;

	
	
	public Transactions(int transactionId, int fromAccount, int toAccount, double transactionAmount,
			String transactionDate) {
		super();
		this.transactionId = transactionId;
		this.fromAccount = fromAccount;
		this.toAccount = toAccount;
		this.transactionAmount = transactionAmount;
		this.transactionDate = transactionDate;
	}



	public int getTransactionId() {
		return transactionId;
	}



	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}



	public int getFromAccount() {
		return fromAccount;
	}



	public void setFromAccount(int fromAccount) {
		this.fromAccount = fromAccount;
	}



	public int getToAccount() {
		return toAccount;
	}



	public void setToAccount(int toAccount) {
		this.toAccount = toAccount;
	}



	public double getTransactionAmount() {
		return transactionAmount;
	}



	public void setTransactionAmount(double transactionAmount) {
		this.transactionAmount = transactionAmount;
	}



	public String getTransactionDate() {
		return transactionDate;
	}



	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}



	public Transactions() {	}
	
	
	
}
