import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

//   //content:boolean=true;
//   title = 'Evoting_ang_anush';
//   imagepath_eci="assets/ECI.jpg";
//   pollelect="assets/pollelect.png"
//   altext_eci="ECI";
//   imagepath_bg="assets/pexels-fwstudio-163999.jpg";
//   altext_bg="BG";

//   public imagePath: any;
//   imgURL: any;
//   public message!: string;
  
//   preview(files: any) {
//     if (files.length === 0)
//       return;
 
//     var mimeType = files[0].type;
//     if (mimeType.match(/image\/*/) == null) {
//       this.message = "Only images are supported.";
//       return;
//     }
 
//     var reader = new FileReader();
//     this.imagePath = files;
//     reader.readAsDataURL(files[0]); 
//     reader.onload = (_event) => { 
//       this.imgURL = reader.result; 
//     }
//   }
//   public showMessage:boolean =false;
//   public showButton:boolean =false;
//  info  = "Fill all the above values to activate this button";
  
//   arr :any =[];
//   fromuser = null;
//   public formdData:any ={
//     //this.arr.push(2);
//   };

//   // public show : any={
//   //   var info  = "Fill all the above values to activate this button";

//   // }


//   registerUser(formData:NgForm){
    
//     this.obj.addparty(formData.value).subscribe({
//       next: (v) => console.log(v),
//       error: (e) => console.error(e),
//       complete: () => console.info('complete') 
//   });
    
  
//     this.formdData=formData.value;
//     //this.showMessage=true;
//     if(this.formdData!=null){
//       this.showMessage=true;
    
//     this.arr.push( {"partyname" : this.formdData.partyname, "partysymbolpath" : this.formdData.partysymbolpath , "partyleadername" : this.formdData.partyleadername , "city": this.formdData.city}  );
//     //console.log(this.arr);
//     this.insertintoapp(this.arr);
//     }
//   }
  
//   constructor(private elementRef: ElementRef, private obj: DataService) {}
  ngAfterViewInit() {
    
}
  
// // showall(){
// //   this.obj.showallparty().subscribe()
// // }

// insertintoapp(anyarr: any[]){
//   this.obj.insertintoservice(anyarr);
// }

// // showcontent(){
// //   this.content = false;
// // }


// // show(): void{
// //   var info  = "Fill all the above values to activate this button";
// // }

// }
// function show() {
//   throw new Error('Function not implemented.');
// }





// getStaffsDetails(){
//   this.staffService.getStaffs().subscribe(
//     {
//       next : (resp) => {
//         console.log(resp);
//         this.staffDetails=resp;
//       },
//       error : (err) => {
//         console.log(err);
//       }
//     }
//     //   {
//     //   next: (h) => console.log(h),
//     //   error: (g) => console.error(g),
//     //   complete: () => console.info('Fetched')
//     // }
//   )
}