import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, 
        HttpHandler,
        HttpResponse,
        HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';     
import 'rxjs/add/operator/do';   
 
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
     
    constructor(){}
     
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Interceptor ran..');
        const started = Date.now();  
        return next
        .handle(req)
        .do(event => {
            if (event instanceof HttpResponse) {

                const elapsed = Date.now() - started; 

                console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            }
        });                  
 
    }
 
}