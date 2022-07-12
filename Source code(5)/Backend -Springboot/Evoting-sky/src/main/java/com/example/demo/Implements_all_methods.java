package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

//@Configurable
@Service
public class Implements_all_methods implements Contains_all_methods{

	
	@Autowired
	 public repo rep ;
	
	@Autowired
	public LoginRepo logrep;
	
	List<PartyDetails> lst = new ArrayList<PartyDetails>();
	
	public Implements_all_methods() {
		
	}
	
	
	
//	public Implements_all_methods(repo rep) {
//		super();
//		this.rep = rep;
//	}
//


	@Override
	public List<PartyDetails> showall() {
		// TODO Auto-generated method stub
		lst = rep.findAll();
		return lst;
	}

	@Override
	public PartyDetails updatetoVote(Long id ) {
		// TODO Auto-generated method stub
		
		PartyDetails party = null; 
		Optional<PartyDetails> opt = rep.findById(id);
		
		if (opt.isPresent()) {
			party=opt.get();
			int vote = party.getVotes();
			party.setVotes(vote+1);
			party.setCity(party.getCity());
			party.setId(party.getId());
			party.setPartyleadername(party.getPartyleadername());
			party.setPartyname(party.getPartyname());
			party.setPartysymbolpath(party.getPartysymbolpath());
			
//			user.setIsvoted(user.getIsvoted() + 1);
//			
//			logrep.save(user);
//			
			return rep.save(party);
		}
		
		return party;
	}

	@Override
	public PartyDetails addparty(PartyDetails pd) {
		// TODO Auto-generated method stub
		System.out.println(pd.getPartyname()
				+ "this is the object passed");
//		PartyDetails pd1 = new PartyDetails();
//		pd1.PartyName="AnushGM";
		return rep.save(pd);
	}



	@Override
	public List<PartyDetails> calcresult() {
		// TODO Auto-generated method stub
		
		return rep.fetchByHighestVotes();
	}

}
