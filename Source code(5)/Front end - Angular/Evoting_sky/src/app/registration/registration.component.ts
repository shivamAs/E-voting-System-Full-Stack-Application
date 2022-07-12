import { Component, OnInit } from '@angular/core';
//import { NgModel } from '@angular/forms';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user = new User();
  constructor(private servobj:RegistrationService, private router :Router) { }

  msg ='';
  ngOnInit(): void {
    
  }
enbl :boolean = true;

  RegisterUser() {
    this.servobj.registervoter(this.user).subscribe({
      next: (v) => {console.log(v),this.msg="Registration Successful",this.router.navigate(['/registersuccess'])},
      
      error: (error) => {console.error("got an error"+error),
                this.msg="This user already exists so you can login directly"},
      complete: () => console.info('complete') 
  });
  }
}

  
