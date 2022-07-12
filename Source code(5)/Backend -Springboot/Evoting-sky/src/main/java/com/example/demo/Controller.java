package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import oracle.net.aso.e;



@RestController
@CrossOrigin(origins = "*")
public class Controller {

	//
	
	//http://localhost:9899/enter-a-party
	
	@Autowired
	private Contains_all_methods con ;
	
	

	List<PartyDetails> lstofparty = new ArrayList<PartyDetails>();
	
	
//	public Controller(Contains_all_methods con) {
//		super();
//		this.con = con;
//	}

//	public Controller() {
//		
//	}
//	
	@PostMapping("/enter-a-party")
	ResponseEntity<PartyDetails> addparty (@RequestBody PartyDetails pd){
		
		System.out.println("Ur entered : "+ pd.getPartyname());
		return new ResponseEntity<PartyDetails>(con.addparty(pd), HttpStatus.CREATED);
		
	}
	
	@PostMapping("/updateparty")
	ResponseEntity<PartyDetails> updateparty (@RequestBody Long id ){
		return new ResponseEntity<PartyDetails>(con.updatetoVote(id), HttpStatus.CREATED);
		
	}
	
	@GetMapping("/showall")
	List<PartyDetails> showallparty(){
		
		lstofparty = con.showall();

		return lstofparty;
	}
	
	@GetMapping("/calc")
	public List<PartyDetails> calcuresult() {
		return con.calcresult();
		
	}
	
	@Autowired
	private Contains_login_methods conlog;
	
	
	@PostMapping("/register")
	public Login savevoter(@RequestBody Login login) throws Exception {
		
		String tempmail = login.getEmailid();
		String pwd = login.getPassword();
		login.setPassword("@#$%@$#L"+pwd.charAt(0)+pwd+pwd.charAt(pwd.length()-1)+"@#$%@$#L");
		
		if (tempmail!= null && !"".equals(tempmail) ) {
			Login obj = conlog.findUser(tempmail);
			
			if (obj!=null) {
				throw new Exception("Account already exists with this email ID :"+tempmail);
			}
			
			
		}
		
		
		
		return conlog.savevoter(login);
	}
	
	@PostMapping("/login")
	public Login loginuser( @RequestBody Login login) throws VotedAlreadyException,NoVoterException {
		// TODO Auto-generated method stub
		String mailid = login.getEmailid();
		String pwd = login.getPassword();
		login.setPassword("@#$%@$#L"+pwd.charAt(0)+pwd+pwd.charAt(pwd.length()-1)+"@#$%@$#L");
		String pwdnew = login.getPassword();
		System.out.println(mailid+ "-------"+pwdnew);
		Login loginloc = new Login();
		if (mailid !=null && pwd != null) {
			System.out.println("yes checking 1");
			
			loginloc = conlog.fetchbyemailandpwd(mailid, pwdnew);
			
			
		}
		
		if (loginloc==null) {
			throw new NoVoterException("User doesn't exist you have to sign up first ");
		}
		
//		if (loginloc.getIsvoted()!=0) {
//			throw new VotedAlreadyException("You have voted already thank you ");
//		}
		
		return loginloc;
	}

	
	@PostMapping("/adminlogin")
	public Login loginAsAdmin(@RequestBody Login login ) throws Exception {
		
		Login log = null;
		if (login.getEmailid().equals("admin@gmail.com") && login.getPassword().equals("admin")) {
			log=login;
		}
		
		else {
			throw new Exception ("Wrong admin credentials ");
		}
		
		return log;
	}
	
	@PostMapping("/stoptovote")
	public Login stopvote( @RequestBody Login login ) {
		
		System.out.println(login.getEmailid() +"in controller");
		return conlog.stopvote(login) ;
		
	}
	
	@GetMapping("/showusers")
	List<Login> showall(){
		
		

		return conlog.showuser();
	}
	
	@PostMapping("/checktostop")
	Login checktostop(@RequestBody String email) {
		return conlog.checktostop(email);
		
	}
}
