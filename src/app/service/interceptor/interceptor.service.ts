import {Injectable} from '@angular/core';
import {
        HttpEvent,
        HttpHandler,
        HttpInterceptor,
        HttpRequest
       } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class HttpInterceptorService implements HttpInterceptor {
  constructor(){}

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
     console.log('Interceptor ran...');
   //  const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
     return next.handle(req);
  }
/*
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor ran..');
    const authReq = req.clone({headers: req.headers.set('X-Custom-Header', 'x-header-value')});
//    const authReq = req.clone({setHeaders: {'X-Custom-Header': 'x-header-value'}});
    return next.handle(authReq);  
}
*/
} 