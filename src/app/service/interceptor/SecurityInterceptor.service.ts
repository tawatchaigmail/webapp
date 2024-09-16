import {Injectable} from '@angular/core';
import {
        HttpEvent,
        HttpHandler,
        HttpInterceptor,
        HttpRequest,
        HttpHeaders
       } from '@angular/common/http';
import {Observable} from 'rxjs';

//import { LoginService } from '../Services/login.service';

@Injectable()

export class HttpInterceptorService implements HttpInterceptor {
  constructor(){}

// constructor(private loginService:LoginService){}

  intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
        console.log("interceptor");
        let currentUser = this.loginService.getToken();
        if (currentUser !=="") {

            request = request.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${currentUser}`
                })
            });
        }
        return next.handle(request);  }
} 