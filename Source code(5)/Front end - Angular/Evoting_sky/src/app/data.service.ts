import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { VoterComponent } from './voter/voter.component';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { ConfirmvoteComponent } from './confirmvote/confirmvote.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private dialog :MatDialog ) { }

  user1 = new User();

  link = "http://localhost:9899";
  
  data:any[]=[];

  insertintoservice(arrays: any[]):void{
    this.data=arrays;
  }

  getData():any[]{
    return this.data;
    };

    
declareresult: boolean =  false;


public addparty(pd :any){
  return this.http.post(this.link+'/enter-a-party',pd);
}

public showallparty(){
  return this.http.get(this.link+'/showall');
}

  
  public calcuresult(){
    return this.http.get(this.link +'/calc');
  }
  // public updateparty(id:number) {
  //   return this.http.post(this.link +'/updateparty',id);
  // }

}
