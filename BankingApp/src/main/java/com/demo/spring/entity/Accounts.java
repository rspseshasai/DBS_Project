package com.demo.spring.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ACCOUNTS")
public class Accounts {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int accno;

	private int cid;
	
	private double balance;
	
	private String type;

	public int getAccno() {
		return accno;
	}

	public void setAccno(int accno) {
		this.accno = accno;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Accounts(int accno, int cid, double balance, String type) {
		super();
		this.accno = accno;
		this.cid = cid;
		this.balance = balance;
		this.type = type;
	}

	public Accounts() {}
	
	
}
