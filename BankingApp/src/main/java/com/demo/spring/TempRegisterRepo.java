package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.TempRegister;

public interface TempRegisterRepo extends JpaRepository<TempRegister, Integer> {

	@Query("SELECT u.id FROM TempRegister u where u.customerName=?1 and u.email=?2")
	int getCurrCustomerId(String x, String y);
}
