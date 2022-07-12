package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Loginew")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE )
	Long id;
	
	@Column(name = "username")
	String username;
	
	@Column(name = "password")
	String password;
	
	@Column(name = "emailid")
	String emailid;
	
	@Column(name = "isvoted")
	Integer isvoted = 0;
	
public Login() {
		
	}

	public Login(Long id, String username, String password, String emailid, int isvoted) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.emailid = emailid;
		this.isvoted = isvoted;
	}

	

	public Integer getIsvoted() {
		return isvoted;
	}

	public void setIsvoted(Integer isvoted) {
		this.isvoted = isvoted;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	
	
}
