import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MyinvitationsComponent } from './myinvitations/myinvitations.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { MygroupsComponent } from './mygroups/mygroups.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



const routes:Routes=[
  {
    path:'', component:BodyComponent
  },
  {
    path:'mygroups', component:MygroupsComponent
  },
  {
    path:'myinvitations', component:MyinvitationsComponent

  },
  {
    path:'mytasks', component:MytasksComponent
  },
  {
    path:'creategroup', component:CreategroupComponent
  },
  {
    path:'joingroup', component:JoingroupComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'logout',component:BodyComponent
  },
  {
    path:'**', component:NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MyinvitationsComponent,
    MytasksComponent,
    MygroupsComponent,
    NotfoundComponent,
    CreategroupComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NoopAnimationsModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
