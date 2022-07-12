import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
     datafromserv: any[]=[];

  constructor(private objj : DataService,private router:Router) { }

  ngOnInit(): void {
    this.datafromserv=this.objj.getData();
  }
  
  confirm(){

    if(confirm("Your party details are successfully registered") ==true){
     
      this.router.navigate(['/thankadmin'])
    }
  }
}
