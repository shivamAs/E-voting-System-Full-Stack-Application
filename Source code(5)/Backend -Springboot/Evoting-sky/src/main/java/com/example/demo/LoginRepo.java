package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginRepo extends JpaRepository<Login, Long> {

	public Login findByEmailid(String emailid);
	
	public Login findByEmailidAndPassword(String emailid,String password);
	
	
}
