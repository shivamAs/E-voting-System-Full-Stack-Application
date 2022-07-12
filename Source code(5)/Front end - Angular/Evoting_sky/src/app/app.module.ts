import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { VoterComponent } from './voter/voter.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { LiveresultComponent } from './liveresult/liveresult.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatButtonModule,
//   MatCommonModule,
//   MatFormFieldModule,
//   MatInputModule,
// } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
//import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatExpansionPanel } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ConfirmvoteComponent } from './confirmvote/confirmvote.component';
import { DataService } from './data.service';
import { VotesuccessComponent } from './votesuccess/votesuccess.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThankadminComponent } from './thankadmin/thankadmin.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AdmininstructionsComponent } from './admininstructions/admininstructions.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    VoterComponent,
    AdminComponent,
    LoginComponent,
    RegistrationComponent,
    AdminloginComponent,
    RegistersuccessComponent,
    LiveresultComponent,
    ConfirmvoteComponent,
    VotesuccessComponent,
    HomepageComponent,
    AboutComponent,
    NavbarComponent,
    ThankadminComponent,
    InstructionsComponent,
    AdmininstructionsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers:[
    {
      provide: MatDialog,
      useValue: {}
    },
    DataService
 ],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmvoteComponent]
 
})
export class AppModule {
  
 }
