package com.demo.spring.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CUSTOMERS")
public class Customers {
	
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY) //start from 10001
	private int customerId;

	private String customerName;
	
	private String address;
	
	private String mobile;
	
	private String email;
	
	
	
	public Customers(int customerId, String customerName, String address, String mobile, String email) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.address = address;
		this.mobile = mobile;
		this.email = email;
	}



	public int getcustomerId() {
		return customerId;
	}



	public void setcustomerId(int customerId) {
		this.customerId = customerId;
	}



	public String getCustomerName() {
		return customerName;
	}



	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getMobile() {
		return mobile;
	}



	public void setMobile(String mobile) {
		this.mobile = mobile;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public Customers() {
		
	}
}
