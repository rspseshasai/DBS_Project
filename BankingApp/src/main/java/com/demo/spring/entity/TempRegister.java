package com.demo.spring.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TEMPREGISTER")
public class TempRegister {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) //start from 10001
	private int customerId;

	private String customerName;
	
	private String address;
	
	private String mobile;
	
	private String email;
	
	private String userName;
	
	private String password;
	
	private String AccountType;

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAccountType() {
		return AccountType;
	}

	public void setAccountType(String accountType) {
		AccountType = accountType;
	}

	public TempRegister(int customerId, String customerName, String address, String mobile, String email,
			String userName, String password, String accountType) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.address = address;
		this.mobile = mobile;
		this.email = email;
		this.userName = userName;
		this.password = password;
		AccountType = accountType;
	}
	
	
	
	
}
