import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  router:Router = inject(Router);

  onCreate(){
    this.router.navigate(['creategroup'])
    
  }
  onJoin(){
    this.router.navigate(['joingroup'])
  }
}
