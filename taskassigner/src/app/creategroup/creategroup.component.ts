import { Component } from '@angular/core';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent {
  groupname:string ="";
  invities: string[]=[];
  onSubmit(){
    alert("a new group is created")
    console.log(this.groupname);
    
  }
  Invitation(){
    alert("an invitation is sent");
    console.log(this.invities)
  }
}
