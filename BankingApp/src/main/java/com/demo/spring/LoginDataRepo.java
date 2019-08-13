package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.LoginData;

public interface LoginDataRepo  extends JpaRepository<LoginData, Integer>{

	@Query("SELECT count(u) FROM LoginData u WHERE u.id=?1 and u.password=?2 and u.type=?3")
	int authenticate(int id, String password, String type);

}
