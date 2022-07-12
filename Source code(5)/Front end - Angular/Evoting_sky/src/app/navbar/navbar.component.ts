import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login : boolean = true ;
  logout : boolean = false;

   onlogin(){
    this.login=false;
    this.logout=true;
    this.router.navigate(['/login'])  }

  public onlogout(){
    this.login=true;
    this.logout=false;
    this.router.navigate(['/logout'])
  }
}
