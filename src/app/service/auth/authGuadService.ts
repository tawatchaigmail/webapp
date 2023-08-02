import {Injectable} from '@angular/core'
import { CanActivate, Router, CanLoad, UrlSegment,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivateChild,
         NavigationExtras,
       } from '@angular/router';

import {AuthService} from './authService';

@Injectable()

export class AuthGuadService {
       constructor( private router : Router, 
                    private authService : AuthService
                  ) {}
       
              
       canActivate(route: ActivatedRouteSnapshot,state : RouterStateSnapshot){
       
             console.log('canActivate'+' '+state.url);
             let url = state.url ; 
            // console.log('url '+url);
            return this.checkLogin(url);
       } 
       
       canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot ){
          console.log('canActivateChild');
         return this.canActivate(route, state);
          
       }
      
      canLoad(route : Router,segments : UrlSegment[] ) : boolean {
       // let url =  '/${route.path}';         
       if (segments.length = 1) {
          let url = segments[0].path ;
          console.log('canLoad '+url+' segments '+segments.length+' '+segments[0].path);        
          return this.checkLogin(url);
        } else {
          return false ;
        }
      }
      
       /*
       canLoad(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
        let url =  state.url;
        console.log('canLoad '+url);
        return this.checkLogin(url);
       }
       */
       checkLogin(url : string){
          console.log('checklogin authService.isLoggedIn '+this.authService.isLoggedIn+' '+url);
          if (this.authService.isLoggedIn) {
                                            return true
                                           } 
          this.authService.redirectUrl = url; 
          let sessionId = 123456789 ;
          
          let navigationExtras : NavigationExtras = {
              queryParams : {'session_id' : sessionId } ,
              fragment : 'anchor'
          }

          this.router.navigate(['/login'],navigationExtras);
          return false ;
       }
}