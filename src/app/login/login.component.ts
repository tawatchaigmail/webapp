import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router,NavigationExtras} from '@angular/router' ;
import {Observable} from 'rxjs';

import {AuthService} from '../service/auth/authService';
import {DialogService} from '../service/auth/dialogService';

@Component({
    selector : 'login-com',
    templateUrl : './login.component.html',                     
    styleUrls : ['./login.component.scss']
})

export class LoginComponent implements OnInit {
        
       constructor( private router : Router, 
                    private authService : AuthService,
                    private dialog : DialogService 
                  ) {}

        ngOnInit() :void {
        }

        canDeactivate() : Observable<boolean> | boolean {
           let dialog = this.dialog.confirm('cancel change') 
           console.log('dialog '+dialog);
           return dialog;
        }
            
        login(){          
            this.authService.login().subscribe(val => console.log(val));
            console.log('login authService.isLoggedIn '+this.authService.isLoggedIn+' authService.redirectUrl '+this.authService.redirectUrl+' ');

            let navigationExtras : NavigationExtras = {
                  queryParamsHandling : 'preserve',
                  preserveFragment : true
          
            }
            this.router.navigate([this.authService.redirectUrl],navigationExtras);
        }

        logout(){          
            console.log('logout');
        }

        cancel(){
               console.log('cancel'); 
        }
}