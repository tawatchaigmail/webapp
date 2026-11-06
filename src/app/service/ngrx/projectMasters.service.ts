import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';

import {ProjectMastersInterface} from '../../models/ngrx/ProjectMastersInterface';
import {environment} from '../../environments/environments';

@Injectable({providedIn : 'root'})

export class ProjectMastersService {

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

  ProjectMastersList : ProjectMastersInterface[] = [
      ]

   // ReadonlyArray<ProjectMastersInterface>
   getApiAll() : Observable<ProjectMastersInterface[]> {
 //  getApiAll() : Observable<ReadonlyArray<ProjectMastersInterface>> {
        console.log(' getApiAll ');
        return this.http.get<ProjectMastersInterface[]>(this.repfilmasUrl+'/readall')
     }

   getAllProjectMastersList() : ProjectMastersInterface[] {
            return this.ProjectMastersList ;
     }
/*
 getProjectMastersUrl() : Observable<CompanyInterface[]> {
     
    return this.http.get<CompanyInterface[]>(this.companyUrl+'/readall')
      .pipe(
        tap(val => this.log('fetched companies')),
        catchError(this.handleError<CompanyInterface[]>('getCompanyUrl(',[]))
     );  
 }     
*/
     async getProjectMasters() : Promise<ProjectMastersInterface[]> {
       const data = await fetch(this.url+'/readall');
       return await data.json() ?? [];
     }
      

     getAllList() : ProjectMastersInterface[] {
         return this.ProjectMastersList;
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
     
   updateData(id : string, body : ProjectMastersInterface) : Observable<any>{

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
     
   getDataById(id : string) : Observable<ProjectMastersInterface> {
        return this.http.get<ProjectMastersInterface>(this.repfilmasUrl+'/read/'+id, this.httpOptions)
        .pipe(
          tap(val => this.log('fetched data ${id} ')),
          catchError(this.handleError<ProjectMastersInterface>('getyById id=${id}'))
        )
    }
     
}