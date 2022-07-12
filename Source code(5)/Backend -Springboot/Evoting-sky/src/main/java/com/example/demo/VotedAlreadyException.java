package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//@ResponseStatus(value = HttpStatus.IM_USED)
public class VotedAlreadyException extends Exception {
	public VotedAlreadyException(String errorMessage) {  
	    super(errorMessage);  
	    
	    }  
}
