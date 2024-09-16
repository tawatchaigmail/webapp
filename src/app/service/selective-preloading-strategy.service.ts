import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router'

import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable()

export class SelectivePreloadingStrategyService { 
       public preloadedModule : string[] = [];  
       constructor(){}

       preload(route : Route , load : () => Observable<any>) : Observable<any> {
         
         if (route.data && route.data['preload']) {
            this.preloadedModule.push(route.path!);
            console.log('preloaded '+route.path);
            return load();
         } else {
            return of(null);
         }
       
       }
        
}