import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';

import {ReportFileMasters} from '../../models/ngrx/reportFileMastersInterface';
import {environment} from '../../environments/environments';

@Injectable({providedIn : 'root'})

export class ReportFileMastersService {

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

  reportFileMastersList : ReportFileMasters[] = [
     {
      REPORT_ID   :  '0' ,
      REPORT_NAME : '0' ,
      FILENAME    :  '0' ,
      REPORT_GROUP  : '0' ,
      DESCRIPTION   : '0' ,
      FLAG_LOG_FILE :  '0' ,
      ORIENTATION   :  '0' ,
      PAPER_SIZE   : '0' ,
      SHOW_FOOTER  : '0' ,
      FORM_FOOTER  : '0' ,
      CTRL_DOC_NUMBER  : '0' ,
     },

     {
      REPORT_ID   :  '1' ,
      REPORT_NAME : '1' ,
      FILENAME    :  '1' ,
      REPORT_GROUP  : '1' ,
      DESCRIPTION   : '1' ,
      FLAG_LOG_FILE :  '1' ,
      ORIENTATION   :  '1' ,
      PAPER_SIZE   : '1' ,
      SHOW_FOOTER  : '1' ,
      FORM_FOOTER  : '1' ,
      CTRL_DOC_NUMBER  : '1' ,
     }
     ]

   // ReadonlyArray<ReportFileMasters>
   getApiAll() : Observable<ReportFileMasters[]> {
 //  getApiAll() : Observable<ReadonlyArray<ReportFileMasters>> {
        console.log(' getApiAll ');
        return this.http.get<ReportFileMasters[]>(this.repfilmasUrl+'/readall')
     }

   getAllReportFileMastersList() : ReportFileMasters[] {
            return this.reportFileMastersList ;
     }
/*
 getReportFileMastersUrl() : Observable<CompanyInterface[]> {
     
    return this.http.get<CompanyInterface[]>(this.companyUrl+'/readall')
      .pipe(
        tap(val => this.log('fetched companies')),
        catchError(this.handleError<CompanyInterface[]>('getCompanyUrl(',[]))
     );  
 }     
*/
     async getReportFileMasters() : Promise<ReportFileMasters[]> {
       const data = await fetch(this.url+'/readall');
       return await data.json() ?? [];
     }
      

     getAllList() : ReportFileMasters[] {
         return this.reportFileMastersList;
     }

   addData(body: any) : Observable<any> {
  //  const headers = { 'content-type': 'application/json'}  
     const data = JSON.stringify(body);

        return this.http.post(this.repfilmasUrl+'/create', data, this.httpOptions)
               /*
               .subscribe( (datares) => { 
                                        console.log('POST completed sucessfully. The response received'+datares) 
                          },
                         (error) => {
                                     console.log('Post failed with the errors')
                         },
                         () => {
                                console.log('Post completed')
                         }
                )
                */ 
                ;

   }
     
   updateData(id : string, body : ReportFileMasters) : Observable<any>{

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

   removeData(id : string) : Observable<any> {
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
     
   getDataById(id : string) : Observable<ReportFileMasters> {
        return this.http.get<ReportFileMasters>(this.repfilmasUrl+'/read/'+id, this.httpOptions)
        .pipe(
          tap(val => this.log('fetched data ${id} ')),
          catchError(this.handleError<ReportFileMasters>('getyById id=${id}'))
        )
    }
     
}