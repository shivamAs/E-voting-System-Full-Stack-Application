import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-liveresult',
  templateUrl: './liveresult.component.html',
  styleUrls: ['./liveresult.component.css']
})
export class LiveresultComponent implements OnInit {

  constructor(private servobj:DataService) {this.calcuresult() }

  ngOnInit(): void {
  }
userres:any = null;
  resultarr:any = null;

  calcuresult (){
    this.servobj.calcuresult().subscribe({
      next: (v) => {console.log(v),this.userres=v},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })
  }
}
