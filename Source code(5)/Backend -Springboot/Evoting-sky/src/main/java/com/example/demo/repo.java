package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

//@Repository
public interface repo extends JpaRepository <PartyDetails, Long>{

	@Query(value = " SELECT *  FROM partyfinale  WHERE Votes = (SELECT MAX(Votes) FROM partyfinale )", nativeQuery = true)
	public List<PartyDetails> fetchByHighestVotes();
	
	
}
