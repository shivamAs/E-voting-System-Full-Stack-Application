package com.example.demo;

import java.util.List;

public interface Contains_login_methods {

	public Login savevoter(Login login);
	
	public Login findUser(String emailid);
	
	//public Login loginuser(Login login );
	
	public Login fetchbyemailandpwd(String emailid, String pwd);
	
	public Login stopvote(Login login );
	
	public List<Login> showuser();
	
	public Login checktostop (String email);
}
