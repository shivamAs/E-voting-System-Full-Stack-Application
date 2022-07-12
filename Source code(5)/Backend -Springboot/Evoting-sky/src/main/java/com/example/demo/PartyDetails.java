package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "partyfinale")
@SequenceGenerator(name = "seq", initialValue = 1, allocationSize = 10000)
public class PartyDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
	Long Id ;
	
	
	@Column(name = "Partyname")
	String Partyname;
	
	@Column(name = "Partysymbolpath")
	String Partysymbolpath;
	
	@Column(name = "Partyleadername")
	String Partyleadername;
	
	@Column(name = "City" )
	String City;
	
	@Column(name = "Votes")
	Integer Votes=0;
	
	
	
	public PartyDetails(Long Id, String Partyname, String Partysymbolpath, String Partyleadername, String City, Integer Votes) {
		super();
		
		this.Id=Id;
		this.Partyname = Partyname;
		this.Partysymbolpath = Partysymbolpath;
		this.Partyleadername = Partyleadername;
		this.City = City;
		this.Votes=Votes;
	}
	
	
	public PartyDetails() {
		
	}


	public Long getId() {
		return Id;
	}


	public void setId(Long id) {
		Id = id;
	}


	public String getPartyname() {
		return Partyname;
	}


	public void setPartyname(String partyname) {
		Partyname = partyname;
	}


	public String getPartysymbolpath() {
		return Partysymbolpath;
	}


	public void setPartysymbolpath(String partysymbolpath) {
		Partysymbolpath = partysymbolpath;
	}


	public String getPartyleadername() {
		return Partyleadername;
	}


	public void setPartyleadername(String partyleadername) {
		Partyleadername = partyleadername;
	}


	public String getCity() {
		return City;
	}


	public void setCity(String city) {
		City = city;
	}


	public Integer getVotes() {
		return Votes;
	}


	public void setVotes(Integer votes) {
		Votes = votes;
	}
	
	
}
