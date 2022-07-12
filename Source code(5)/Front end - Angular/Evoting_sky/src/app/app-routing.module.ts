import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LiveresultComponent } from './liveresult/liveresult.component';
import { LoginComponent } from './login/login.component';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { VoterComponent } from './voter/voter.component';
import { VotesuccessComponent } from './votesuccess/votesuccess.component';
import {HomepageComponent} from './homepage/homepage.component'
import { AboutComponent } from './about/about.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AdmininstructionsComponent } from './admininstructions/admininstructions.component';
import { ThankadminComponent } from './thankadmin/thankadmin.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch:'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'voter', component: VoterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'adminlogin', component:AdminloginComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'registersuccess', component:RegistersuccessComponent},
  {path: 'liveresult', component:LiveresultComponent},
  {path: 'votesuccess' , component:VotesuccessComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path:'admininstruc', component:AdmininstructionsComponent},
  {path:'thankadmin',component:ThankadminComponent},
  {path:'logout',component:LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
