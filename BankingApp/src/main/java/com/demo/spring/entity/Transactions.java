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
	private int tid;
	
	private int fromacc;
	
	private int toacc;
	
	private String date;

	private double amount;

	public Transactions(int tid, int fromacc, int toacc, String date, double amount) {
		super();
		this.tid = tid;
		this.fromacc = fromacc;
		this.toacc = toacc;
		this.date = date;
		this.amount = amount;
	}

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public int getFromacc() {
		return fromacc;
	}

	public void setFromacc(int fromacc) {
		this.fromacc = fromacc;
	}

	public int getToacc() {
		return toacc;
	}

	public void setToacc(int toacc) {
		this.toacc = toacc;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Transactions() {	}
	
	
	
}
