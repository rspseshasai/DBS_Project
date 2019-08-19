package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.Customers;

public interface CustomerRepo extends JpaRepository<Customers, Integer> {


	
	
	@Query("select u from Customers u where u.customerId=?1")
	Customers getLoggedInCustomerObject(int id);

//	@Query("SELECT id FROM Customers u where u.userName=?1 and u.password=?2")
//	int getCustomerId(String userName, String password);


	
}
