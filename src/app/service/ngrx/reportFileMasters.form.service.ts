import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';

import {ReportFileMastersForms} from '../../models/ngrx/reportFileMastersInterface'

import {environment} from '../../environments/environments';

@Injectable({providedIn : 'root'})

export class ReportFileMastersFormService {

private repfilmasUrl = environment.apiUrl+'/api/repfilmas';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 

  private log(message: string) {
 // this.messageService.add(`CompanyService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result? : T){
   return (error : any) : Observable<T> => {
                 console.error(error);
                 this.log('${operation} failed : $(error.messate)');
                 return of (result as T);
              };
  }


  url = '/assets/data_bicycle.json';
  constructor(private http : HttpClient) {}

  ReportFileMastersFormsList : ReportFileMastersForms[] = [
     {
                                             "reportId" : 0,
                                             "fileName" : "",
                                             "reportName"   : "",
                                             "description" : "",
                                             "reportGroup" : "",    
                                             "orantation" : "",
                                             "ctrlDocNo" : "",
                                             "flagLogFile" : "",
                                             "showFooter"  : "", 
                                             "formFooter"  : "",
                                             "paperSize" : ""
     },

     {
                                             "reportId" : 0,
                                             "fileName" : "",
                                             "reportName"   : "",
                                             "description" : "",
                                             "reportGroup" : "",    
                                             "orantation" : "",
                                             "ctrlDocNo" : "",
                                             "flagLogFile" : "",
                                             "showFooter"  : "", 
                                             "formFooter"  : "",
                                             "paperSize" : ""
     }
     ]

   // ReadonlyArray<ReportFileMastersForms>
   getApiAll() : Observable<ReportFileMastersForms[]> {
 //  getApiAll() : Observable<ReadonlyArray<ReportFileMastersForms>> {
        console.log(' getApiAll ');
        return this.http.get<ReportFileMastersForms[]>(this.repfilmasUrl+'/readall')
     }

   getAllReportFileMastersFormsList() : ReportFileMastersForms[] {
            return this.ReportFileMastersFormsList ;
     }
/*
 getReportFileMastersFormsUrl() : Observable<CompanyInterface[]> {
     
    return this.http.get<CompanyInterface[]>(this.companyUrl+'/readall')
      .pipe(
        tap(val => this.log('fetched companies')),
        catchError(this.handleError<CompanyInterface[]>('getCompanyUrl(',[]))
     );  
 }     
*/
     async getReportFileMastersForms() : Promise<ReportFileMastersForms[]> {
       const data = await fetch(this.url+'/readall');
       return await data.json() ?? [];
     }
      

     getAllList() : ReportFileMastersForms[] {
         return this.ReportFileMastersFormsList;
     }

 //  addData(body: any) : Observable<any> {
   addData(body: any) {
     const data = JSON.stringify(body);
        console.log(' ReportFileMastersFormService addData ');
        return this.http.post(this.repfilmasUrl+'/create', data, this.httpOptions)
        /*
                       .pipe(
                           tap(val => this.log('fetched data ${id} ')),
                           catchError(this.handleError<ReportFileMastersForms>('getyById id=${id}'))
                       )
        */     
               .subscribe( (datares) => { 
                                        console.log('POST ReportFileMaster sucessfully. The response received'+datares) 
                          },
                         (error) => {
                                     console.log('Post failed with the errors')
                         },
                         () => {
                                console.log('Post completed')
                         }
                )
                 
                ;

   }
     
   updateData(id : string, body : ReportFileMastersForms) : Observable<any>{

       const data = JSON.stringify(body);
       console.log(' id : '+id);
       
       return this.http.put(this.repfilmasUrl+'/update/'+id, data, this.httpOptions)
            /*
            .subscribe( (respon) => {
                                    console.log('put completed sucessfully')
                        },
                         (error) => {
                                    console.log('put failed with the errors');
                         },
                         () => {
                                console.log('put completed');
                         }
                )
            */
                ;
   }

   removeData(id : number) : Observable<any> {
         return this.http.delete(this.repfilmasUrl+'/delete/'+id, this.httpOptions)
            /*
            .subscribe( (respon) => {
                                    console.log('delete completed sucessfully')
                        },
                         (error) => {
                                    console.log('delete failed with the errors');
                         },
                         () => {
                                console.log('delete completed');
                         }
                )
             */
              ;  
   }
     
   getDataById(id : number) : Observable<ReportFileMastersForms> {
        return this.http.get<ReportFileMastersForms>(this.repfilmasUrl+'/read/'+id, this.httpOptions)
        .pipe(
          tap(val => this.log('fetched data ${id} ')),
          catchError(this.handleError<ReportFileMastersForms>('getyById id=${id}'))
        )
    }
     
}