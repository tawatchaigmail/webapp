import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router,NavigationExtras} from '@angular/router' ;
import {Observable} from 'rxjs';


import {AuthService} from '../service/auth/authService';
import {DialogService} from '../service/auth/dialogService';

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
                    private authService : AuthService,
                    private dialog : DialogService 
                  ) {}

        ngOnInit() :void {
        }

        canDeactivate() : Observable<boolean> | boolean {
           return this.dialog.confirm('cancel change');
        }
            
        login(){          
            this.authService.login();
            console.log('login '+this.authService.isLoggedIn+' '+this.authService.redirectUrl+' ');

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