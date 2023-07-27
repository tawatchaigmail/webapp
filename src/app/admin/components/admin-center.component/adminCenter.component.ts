import {Component, OnInit} from '@angular/core' ;
import {CommonModule} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
                

import {AuthService} from '../../../service/auth/authService'; 

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

     this.authService.logout();
     console.log('logout admin center authService.isLoggedIn '+this.authService.isLoggedIn);
     this.router.navigate(['/login']);
  }

  ngOnInit(){
  };

} 