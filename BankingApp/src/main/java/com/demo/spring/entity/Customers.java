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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cid;

	private String cname;
	
	private String address;
	
	private String mobile;
	


	public Customers(int cid, String cname, String address, String mobile) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.address = address;
		this.mobile = mobile;
	}



	public int getCid() {
		return cid;
	}



	public void setCid(int cid) {
		this.cid = cid;
	}



	public String getCname() {
		return cname;
	}



	public void setCname(String cname) {
		this.cname = cname;
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



	public Customers() {
		
	}
}
