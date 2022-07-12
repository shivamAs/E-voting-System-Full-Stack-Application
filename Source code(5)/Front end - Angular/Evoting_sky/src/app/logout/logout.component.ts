import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private regserv : RegistrationService) { }

  ngOnInit(): void {

    this.regserv.adminsession=false;
    this.regserv.votersession = false;
  }


}
