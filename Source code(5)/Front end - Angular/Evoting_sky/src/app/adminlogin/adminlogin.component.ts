import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public user = new User();
  constructor(private servobj:RegistrationService,private elementRef: ElementRef, private router :Router) { }

  msg ='';
  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'Lightblue';
  }

  enbl : boolean= true;

   loginasadmin() {
    this.servobj.loginasadmin(this.user).subscribe({
      next: (v) => {console.log(v), this.servobj.adminsession = true, this.router.navigate(['/admin'])},
      error: (e) => {console.error("got an error"+e),
                this.msg="You have entered wrong admin credentials, please try giving correct admin emailid and admin password "},
      complete: () => console.info('complete') 
  });
  }
}
