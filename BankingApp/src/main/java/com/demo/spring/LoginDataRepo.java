package com.demo.spring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.spring.entity.LoginData;

public interface LoginDataRepo  extends JpaRepository<LoginData, Integer>{

//	Query("SELECT count(u) FROM LoginData u WHERE u.userName=?1 and u.password=?2 and u.userType=?3")
//	int authenticate(String userName, String password, String userType);

	
	@Query("SELECT u.id FROM LoginData u where u.userName=?1")
	int getCurrId(String userName);

	@Query("SELECT u.id FROM LoginData u where u.userName=?1 and u.password=?2")
    int getUserId(String userName,String password);
	
	@Query("SELECT u.userType FROM LoginData u where u.id=?1")
    String getUserType(int cur_id);

	
	@Query("select u from LoginData u where u.id=?1")
	LoginData getLoginDataObj(int custId);

	@Query("select count(u) from LoginData u where u.userName=?1")
	int doesExists(String userName);
	
}
