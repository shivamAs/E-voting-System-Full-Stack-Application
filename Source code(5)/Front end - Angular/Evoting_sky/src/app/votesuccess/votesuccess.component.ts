import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-votesuccess',
  templateUrl: './votesuccess.component.html',
  styleUrls: ['./votesuccess.component.css']
})
export class VotesuccessComponent implements OnInit {

  constructor(private regserv: RegistrationService, private router : Router) { }

  ngOnInit(): void {
    
      if(this.regserv.votersession==false){
        this.router.navigate(['/login'])
      }
    }
  }


