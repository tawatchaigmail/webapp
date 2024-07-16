import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {ReportFileMasters} from '../../models/ngrx/reportFileMastersInterface';
import {environment} from '../../environments/environments';

@Injectable({providedIn : 'root'})

export class ReportFileMastersService {

private repfilmasUrl = environment.apiUrl+'/api/repfilmas';  // URL to web api

     url = '/assets/data_bicycle.json';
     constructor(private http : HttpClient) {}

     reportFileMastersList : ReportFileMasters[] = [
                           {
                              reportId       : '2',
                              parameterName : 'tcdrs',
                              description    : 'la',
                              rgText         : 'AC01',
                           },
                           {
                              reportId       : '2',
                              parameterName : 'tcdrs',
                              description    : 'la',
                              rgText         : 'AC001',
                           }

     ]

     getApiAll() : Observable<ReportFileMasters[]> {
        return this.http.get<ReportFileMasters[]>(this.repfilmasUrl)
     }

     getAllReportFileMastersList() : ReportFileMasters[] {
            return this.reportFileMastersList ;
     }

     
     async getReportFileMasters() : Promise<ReportFileMasters[]> {
       const data = await fetch(this.url);
       return await data.json() ?? [];
     }
      

     getAllList() : ReportFileMasters[] {
         return this.reportFileMastersList;
     }
}