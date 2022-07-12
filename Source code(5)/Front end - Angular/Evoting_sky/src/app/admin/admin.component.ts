import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit, OnInit {

  title = 'Evoting_ang_anush';
  imagepath_eci="assets/ECI.jpg";
  pollelect="assets/pollelect.png"
  altext_eci="ECI";
  imagepath_bg="assets/pexels-fwstudio-163999.jpg";
  altext_bg="BG";
  public showmessage:boolean =false;
  public showbutton:boolean =false;

  public imagePath: any;
  imgURL: any;
  public message!: string;
  
  preview(files: any) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  
 info  = "Fill all the above values to activate this button";
  
  arr :any =[];
  fromuser = null;
  public formdData:any ={
    //this.arr.push(2);
  };

  // public show : any={
  //   var info  = "Fill all the above values to activate this button";

  // }


  registerUser(formData:NgForm){
    
    this.obj.addparty(formData.value).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
    
  
    this.formdData=formData.value;
    //this.showMessage=true;
    if(this.formdData!=null){
      this.showmessage=true;
    
    this.arr.push( {"partyname" : this.formdData.partyname, "partysymbolpath" : this.formdData.partysymbolpath, "partyleadername" : this.formdData.partyleadername , "city": this.formdData.city}  );
    //console.log(this.arr);
    this.insertintoapp(this.arr);
    }
  }
  
  constructor(private elementRef: ElementRef, private obj: DataService, private regserv: RegistrationService, private router : Router) {}
  ngOnInit(): void {
    if(this.regserv.adminsession==false){
     this.router.navigate(['/adminlogin'])
    }
  }
 
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'Lightblue';
}
  
// showall(){
//   this.obj.showallparty().subscribe()
// }

insertintoapp(anyarr: any[]){
  this.obj.insertintoservice(anyarr);
}

// showcontent(){
//   this.content = false;
// }


// show(): void{
//   var info  = "Fill all the above values to activate this button";
// }

}
function show() {
  throw new Error('Function not implemented.');
}