import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';

import {Actor} from '../../models/ngrx/actorInterface';


@Injectable({providedIn : 'root'})

export class actorsService {

      url = '/assets/data_actors.json';

      constructor(private http : HttpClient) {}

      actorList : Actor[] = [
                           {name : "carme" , gender : "male"},
                           {name : "more" ,gender : "female"}
                          ]

    getAll() : Observable<Actor[]> {  
       return   this.http.get<Actor[]>('/actors') ;
    }
  
    getAllActorsList(): Actor[] {
      return this.actorList;
    }

    async getActors(): Promise<Actor[]> {

      const data = await fetch(this.url);
      console.log(data);
      return await data.json() ?? []; 
    }
}