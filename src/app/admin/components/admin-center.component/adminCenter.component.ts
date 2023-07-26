import {Component, OnInit} from '@angular/core' ;
import {CommonModule} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
                

import {AuthService} from '../../services/authService'; 

@Component({
 selector: 'admin-center',
// standalone: true,
/*
 imports : [
            CommonModule
           ],
 */
 templateUrl : './adminCenter.component.html' ,
 styleUrls : ['./adminCenter.component.scss'] ,
 
})

export class AdminCenterComponent implements OnInit {

 constructor(
              private authService : AuthService,
              private router : Router, 
            ) {}
  logout(){
     console.log('logout admin center ');
     this.authService.logout();
     this.router.navigate(['/login']);
  }

  ngOnInit(){
  };

} 