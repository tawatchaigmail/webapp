import {Component, OnInit} from '@angular/core' ;
import {CommonModule} from '@angular/common';
import {Router, ActivatedRoute ,ParamMap} from '@angular/router';
import {Observable } from 'rxjs';
import {map,switchMap} from 'rxjs/operators';
                
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

 public sessionId? : Observable<string>;
 public token? : Observable<string>;

 constructor(
              private authService : AuthService,
              private route : ActivatedRoute ,
              private router : Router, 
            ) {}
  logout(){

     this.authService.logout();
     console.log('logout admin center authService.isLoggedIn '+this.authService.isLoggedIn);
     this.router.navigate(['/login']);
  }

  ngOnInit(){
     this.sessionId = this.route
        .queryParamMap
        .pipe( map(params => params.get('session_id') || 'Non' )   );

     this.token = this.route
         .fragment
         .pipe( map(fragment => fragment || 'Non')  ); 
  };

} 