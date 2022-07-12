package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NoVoterException extends Exception {

	public NoVoterException(String errorMessage) {  
	    super(errorMessage);
	    
	    System.out.println("Novoter called");
	    }  
}
