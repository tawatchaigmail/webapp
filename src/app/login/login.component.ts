import {Component, OnInit} from '@angular/core';

import {CommonModule} from '@angular/common';

import {Router} from '@angular/router' ;

import {AuthService} from '../admin/services/authService';

@Component({
    selector : 'login-com',
    /*
    imports : [
              CommonModule,
             ],
    */
    templateUrl : './login.component.html',                     
    styleUrls : ['./login.component.scss']
})

export class LoginComponent implements OnInit {

        
       constructor( private router : Router, 
                    private authService : AuthService
                  ) {}

        ngOnInit() :void {
            }
        login(){
          //  console.log(' befor login '+this.authService.redirectUrl+' '+this.authService.isLoggedIn);
            this.authService.login();
            console.log(' after login '+this.authService.redirectUrl+' '+this.authService.isLoggedIn);
            this.router.navigate([this.authService.redirectUrl]);
        }

        logout(){          
            console.log('logout');
        }

        cancel(){
               console.log('cancel'); 
        }
}