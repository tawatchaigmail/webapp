import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';

//import {Router,Resolve, ActivatedRouteSnapshot,   //     NavigationExtras,
//        RouterStateSnapshot} from '@angular/router';

import {ReportFileParametersForms,ReportFileParametersFormsId,Response} from '../../models/ngrx/reportFileParametersInterface'
import {environment} from '../../environments/environments';

@Injectable({providedIn : 'root'})

export class ReportFileParametersFormService {

private repfilmasUrl = environment.apiUrl+'/api/repfilpar';  // URL to web api

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

  ReportFileParametersFormsList : ReportFileParametersForms[] = [
     {
                                        "reportId"       : 1,
                                        "seqNo"          : 1,
                                        "parameterName"  : "rpt_contry",
                                        "initialValue"   : "0",
                                        "initialValueTo" : "0",
                                        "dataType"       : "number",
                                        "description"    : "Contry",
                                        "rgText2"         : "hrifdgdr",
                                        "rgText"         : "hrifdgdr",
                                        "updatedAllowed" : "N",
                                        "multiFlag"      : "Y"
     },

     {
                                        "reportId"       : 1,
                                        "seqNo"          : 2,
                                        "parameterName"  : "rpt_contry",
                                        "initialValue"   : "0",
                                        "initialValueTo" : "0",
                                        "dataType"       : "number",
                                        "description"    : "Contry",
                                        "rgText2"         : "hrifdgdr",
                                        "rgText"         : "hrifdgdr",
                                        "updatedAllowed" : "N",
                                        "multiFlag"      : "Y"
     }
     ]

   // ReadonlyArray<ReportFileParametersForms>
   getApiAll() : Observable<ReportFileParametersForms[]> {
 //  getApiAll() : Observable<ReadonlyArray<ReportFileParametersForms>> {
        console.log(' getApiAll ');
        return this.http.get<ReportFileParametersForms[]>(this.repfilmasUrl+'/readall')
     }

   getAllReportFileParametersFormsList() : ReportFileParametersForms[] {
            return this.ReportFileParametersFormsList ;
     }
/*
 getReportFileParametersFormsUrl() : Observable<CompanyInterface[]> {
     
    return this.http.get<CompanyInterface[]>(this.companyUrl+'/readall')
      .pipe(
        tap(val => this.log('fetched companies')),
        catchError(this.handleError<CompanyInterface[]>('getCompanyUrl(',[]))
     );  
 }     
*/
     async getReportFileParametersForms() : Promise<ReportFileParametersForms[]> {
       const data = await fetch(this.url+'/readall');
       return await data.json() ?? [];
     }
      

     getAllList() : ReportFileParametersForms[] {
         return this.ReportFileParametersFormsList;
     }

//   addData(body: any) : Observable<any> {
   addData(body: any) {
  //  const headers = { 'content-type': 'application/json'}  
     const data = JSON.stringify(body);
        console.log('ReportFileParametersFormService addData');
        return this.http.post(this.repfilmasUrl+'/create', data, this.httpOptions)
        /*
                                  .pipe(
                                       tap(val => this.log('fetched data id ${id} ')),
                                       catchError(this.handleError<ReportFileParametersForms[]>('getyById id=${id}'))
                                   )
        */
               
               .subscribe( (datares) => { 
                                        console.log('POST ReortFilePaPaarmerer sucessfully. The response received'+datares) 
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
     
   updateData(id : string, body : ReportFileParametersForms) : Observable<any>{

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

   removeDataById(refId : ReportFileParametersFormsId) : Observable<any> {
         const data = JSON.stringify(refId);
         return this.http.post(this.repfilmasUrl+'/deletebyid/' ,data ,this.httpOptions)
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
   getDataById(id : number,seqNo : number) : Observable<ReportFileParametersForms> {
        return this.http.get<ReportFileParametersForms>(this.repfilmasUrl+'/read/'+id+'/'+seqNo, this.httpOptions)
        .pipe(
          tap(val => this.log('fetched data ${id} ')),
          catchError(this.handleError<ReportFileParametersForms>('getyById id=${id}'))
        )
    };

   getDataByReportId(id : number) : Observable<ReportFileParametersForms[]> {
                    
        // let id : string  = route.paramMap.get('id') as string; 
        return this.http.get<ReportFileParametersForms[]>(this.repfilmasUrl+'/find/'+id, this.httpOptions)
        .pipe(
          tap(val => this.log('fetched data id ${id} ')),
          catchError(this.handleError<ReportFileParametersForms[]>('getyById id=${id}'))
        );
        
    };
     
}