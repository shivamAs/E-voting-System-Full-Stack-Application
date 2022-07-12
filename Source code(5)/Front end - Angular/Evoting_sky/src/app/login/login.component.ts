//import { error } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { catchError } from 'rxjs';
import { pipe } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public user = new User();
  constructor(private servobj:RegistrationService,private elementRef: ElementRef, private router :Router) { }


stat: any =[] ;
  msg  ="";
  checkisvoted :any= null;
  ngOnInit(): void {
    
  }

  checktostop(){
    this.servobj.checktostop(this.user.emailid).subscribe({
      next: (v) =>{console.log(v),this.checkisvoted=v,
        
        console.log("checkisvoted array called")
      console.log(this.checkisvoted)
  
      {if(this.checkisvoted.isvoted!=0){
  console.log("inside if");
        this.router.navigate(['/votesuccess'])}
        else{
          console.log("inside else");
  
          this.router.navigate(['/voter'])
        }
       
        }}
    });
    
  }

   loginuser() {
    this.servobj.loginuserfromweb(this.user).subscribe({

     
      next: (v) => {console.log(v),
        this.servobj.filluser(this.user),
       this.servobj.votersession=true,this.checktostop()

       },

      error:  (e)=> {console.error("got an error"+e),

               
                this.msg= "Bad Credentials!";
                 //this.router.navigate(['/votesuccess'])
                },
      complete: () => console.info('complete') 
  })


  }
}
