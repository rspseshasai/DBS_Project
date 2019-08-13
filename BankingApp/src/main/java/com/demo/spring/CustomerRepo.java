package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.spring.entity.Customers;

public interface CustomerRepo extends JpaRepository<Customers, Integer> {

}
