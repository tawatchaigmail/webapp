import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import { catchError, map} from 'rxjs/operators';

import {Book} from '../models/bookInterface';

@Injectable({providedIn : 'root'})

export class BookService {
    constructor(private http : HttpClient) {}
    
  //  let headers = new Headers();

  //  headers.append('Content-Type', 'application/json');
  //  headers.append('Accept', 'application/json');
  //  headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
  //  headers.append('Origin','http://localhost:3000');

    getBook() : Observable<ReadonlyArray<Book>> {
                                                 return this.http.get<{items : Book[]}>(
                                                                                        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks',
                                                                                        
                                                                                         {
                                                                                          headers: new HttpHeaders({
                                                                                                                   "Content-Type" : [ "application/json","text/plain"],
                                                                                                                   "Access-Control-Allow-Origin" : "*",
                                                                                                                   "Access-Control-Allow-Methods" : "GET,POST,OPTIONS,DELETE,PUT",
                                                                                                                   "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                                                                                                                                                       
                                                                                                              //     'Accept' : 'application/json',
                                                                                                              //     "Origin" : "http://localhost:4202"
                                                                                                                  })
                                                                                          }
                                                                                          
                                                 )
                                                 .pipe(map((books) => {
                                                                       return books.items||[]
                                                                      }
                                                           )
                                                       );
                                                 }
}
