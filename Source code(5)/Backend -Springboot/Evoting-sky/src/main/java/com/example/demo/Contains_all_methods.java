package com.example.demo;

import java.util.List;

//import demo.model.Customer;

public interface Contains_all_methods {

	List<PartyDetails> showall();
	PartyDetails  updatetoVote(Long id );
	PartyDetails  addparty(PartyDetails pd);
	
	List<PartyDetails> calcresult();
	
}
