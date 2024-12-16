import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MyinvitationsComponent } from './myinvitations/myinvitations.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { MygroupsComponent } from './mygroups/mygroups.component';
import { NotfoundComponent } from './notfound/notfound.component';



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
  },{
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
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
