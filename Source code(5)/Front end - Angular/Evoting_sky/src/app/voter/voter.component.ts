import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { error } from 'console';
import { DataService } from '../data.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
//import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  partyarray :any = null;
  user : User =  new User ();
  constructor(private servobj:DataService,private regserv:RegistrationService, private router :Router) { this.showallparty()}

  ngOnInit(): void {
    // console.log("see here")
    // console.log(this.user.isvoted)

    if(this.regserv.votersession==false){
      this.router.navigate(['/login'])
    }
  }

  showallparty(){
    this.servobj.showallparty().subscribe({
      next: (v) => {console.log(v),this.partyarray=v},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
    
  }

  updateparty(a: { id: number }){
    this.regserv.updateparty(a.id).subscribe({
      next: (v) => {console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }

  confirm(a: {
    partyname: string; id: number; 
}){
    if(confirm("Are you sure to vote for "+a.partyname+" ? You can't undo it") ==true){
      this.updateparty(a),
      this.router.navigate(['/votesuccess']),
      this.regserv.sendtoupdatetostop()
    }
  }
}
