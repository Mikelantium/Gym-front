import { Component } from '@angular/core';
import { ClassService } from '../services/class.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public api: ClassService, private router: Router){
  }

  logout(){
    this.api.logout()
    this.router.navigate(['/login']);
  }




}
