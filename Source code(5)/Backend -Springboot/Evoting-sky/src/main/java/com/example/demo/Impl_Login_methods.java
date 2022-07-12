package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Impl_Login_methods implements Contains_login_methods{

	@Autowired
	public LoginRepo repo;
	
	@Override
	public Login savevoter(Login login) {
		// TODO Auto-generated method stub
		return repo.save(login);
	}

	@Override
	public Login findUser(String emailid) {
		// TODO Auto-generated method stub
		
		return repo.findByEmailid(emailid);
	}

	@Override
	public Login fetchbyemailandpwd(String emailid, String pwd) {
		// TODO Auto-generated method stub
		return repo.findByEmailidAndPassword(emailid, pwd);
	}

	@Override
	public Login stopvote(Login login) {
		// TODO Auto-generated method stub
		System.out.println(login.getEmailid() +"in impl");

		Login lognew  = repo.findByEmailid(login.getEmailid());
	
	
		
			int i = lognew.getIsvoted();
			lognew.setIsvoted(i+1);
			System.out.println(lognew.getEmailid() +"in impl 2");
			System.out.println(lognew.getIsvoted() +"in impl 2");
		
		

		return repo.save(lognew);
	}

	@Override
	public List<Login> showuser() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Login checktostop(String email) {
		// TODO Auto-generated method stub
		return repo.findByEmailid(email);
	}

	

}
