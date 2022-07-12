//package com.example.demo;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.context.request.WebRequest;
//import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
//
//@ControllerAdvice
//public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
//	
//	@ExceptionHandler(NoVoterException.class)
//	public ResponseEntity<?> noVoter (NoVoterException ex , WebRequest request){
//		System.out.println("global called");
//		ErrorDetails errorDetails = new ErrorDetails (ex.getMessage());
//		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
//		
//	}
//}