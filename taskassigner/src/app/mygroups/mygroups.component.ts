import { Component } from '@angular/core';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
export interface GroupData{
  id: number;
  name: string;
  createdby: string;
  createdon:string;
  
}


@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css']
})
export class MygroupsComponent {

  //http call for created groups
  Group_Data: GroupData[]=[{id:1, name:"group1",createdby:"sravya",createdon:"01/01/2024"}];
  displayedColumns: string[] = ['id', 'name', 'createdby', 'createdon'];
  dataSource = this.Group_Data;
}
