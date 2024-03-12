import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import {CompanyInterface} from '../models/companyInterface';
import {CompanyModels} from '../models/companyModels';

import {environment} from '../environments/environment';

  var baseUrl = environment.apiUrl;
  var apiurl = {
     getAll : baseUrl + '/api/company/readall',
     getById : baseUrl + '/api/company/reada/',
     addCompany : baseUrl + '/api/company/create',
     editCompany : baseUrl + '/api/company/update',
     deleteCompany : baseUrl + '/api/company/delete',
  }


@Injectable({
   providedIn : 'root'
})



export class CompanyService{

  private companyUrl = environment.apiUrl+'/api/company';  // URL to web api
   
  private assetUrl = '/assets/data_com.json';
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  
  private companies? : CompanyInterface[] ;
 
  constructor(private http: HttpClient) {  
  }

/** Log a message with the MessageService */
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

 addCompany(body : any){
  const headers = { 'content-type': 'application/json'}  
  const data = JSON.stringify(body);
  const params = new HttpParams()
        .set('param0',"value0")
        .set('param1',"value1") ;
  // http://localhost:3000/people?para0=value0&para1=value1
 //  return this.http.post(this.companyUrl+'/create',data,{'headers':headers, 'params' : params})
  return this.http.post(this.companyUrl+'/create',data,{'headers':headers})
               .subscribe( (datares) => { 
                                        console.log('POST completed sucessfully. The response received'+datares) 
                          },
                         (error) => {
                                     console.log('Post failed with the errors')
                         },
                         () => {
                                console.log('Post completed')
                         }
                );
 }
 
 updateCompany(id : string, body : CompanyInterface){
 // id : string ;
  console.log('id ${id}' );
// return this.http.put('${this.companyUrl}/update/${id}',body,this.httpOptions)
 return this.http.put(this.companyUrl+'/update/'+id,body,this.httpOptions)
            .subscribe( (respon) => {
                                    console.log('put completed sucessfully')
                        },
                         (error) => {
                                    console.log('put failed with the errors');
                         },
                         () => {
                                console.log('put completed');
                         }
                ); 
 } 

 editCompany(id : string, body : CompanyInterface){
 // id : string ;
  console.log('id ${id} :'+body.COMPANY);
// return this.http.patch('${this.companyUrl}/update/${id}', body, this.httpOptions)
 return this.http.patch(this.companyUrl+'/update/'+id,body,this.httpOptions)
            .subscribe( (respon) => {
                                    console.log('patch completed sucessfully')
                        },
                         (error) => {
                                    console.log('patch failed with the errors');
                         },
                         () => {
                                console.log('patch completed');
                         }
                ); 
 } 

 removeCompany(id : string){
//    return this.http.delete('${this.companyUrl}/delete/${id}',this.httpOptions)
    return this.http.delete(this.companyUrl+'/delete/'+id,this.httpOptions)
            .subscribe( (respon) => {
                                    console.log('delete completed sucessfully')
                        },
                         (error) => {
                                    console.log('delete failed with the errors');
                         },
                         () => {
                                console.log('delete completed');
                         }
                ); 
    
 }
 getCompanyUrl() : Observable<CompanyInterface[]> {
     
    return this.http.get<CompanyInterface[]>(this.companyUrl+'/readall')
      .pipe(
        tap(val => this.log('fetched companies')),
        catchError(this.handleError<CompanyInterface[]>('getCompanyUrl(',[]))
     );  
 }

 getCompanyById(id : String) : Observable<CompanyInterface> {
      const url = `${this.companyUrl}/read/${id}`; 
    return this.http.get<CompanyInterface>(url)
        .pipe(
          tap(val => this.log('fetched companie ${id} ')),
          catchError(this.handleError<CompanyInterface>('getCompanyById id=${id}'))
     );  
 }

  public getCompanyAsset() {
 
    return this.http.get<CompanyInterface[]>(this.assetUrl)
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.companies = response; 
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }



 getCompany() : Observable<CompanyInterface[]> {
 //    
    const companies = of (CompanyModels) ;
    console.log('getCompany');
    return companies;  
 }

/*
  getCompany() : CompanyInterface[] {

  return CompanyModels; 
  
  }
*/
}




