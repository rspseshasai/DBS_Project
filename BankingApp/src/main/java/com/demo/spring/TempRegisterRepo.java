package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.spring.entity.TempRegister;

public interface TempRegisterRepo extends JpaRepository<TempRegister, Integer> {

}
