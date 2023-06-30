import {Component, Input, OnInit, Output}  from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
import {CompanyInterface} from '../../models/companyInterface';
 //import {CompanyModels} from '../../models/companyModels';
import {CompanyService} from '../../service/company.service';

import { CompanyDetails } from '../../components/CompanyDetails/CompanyDetails';

@Component({
    selector : 'com-company',
    standalone: true,  
    imports: [
              CommonModule,
              FormsModule,
              CompanyDetails
    ],

    templateUrl : './companyComponent.html' ,
    styleUrls : ['./companyComponent.scss']
})

export class CompanyComponent implements OnInit{

  selectCompany? : CompanyInterface ;  
  companyById? : CompanyInterface ;
  companies : CompanyInterface[] = [] ;
  rowbank : CompanyInterface =  {
             SEQ_NO : 0 ,
             COMPANY : ' ',
             DESCRIPTION : ' ',
             COMPANY_ADDRESS : ' ',
             TELEPHONE : '',
             TAX_ID : '',
             CREATED_BY :  ' ',             
             CREATED_ON :  Date.now(),
             LAST_UPD_ON :  new Date(),
             LAST_UPD_BY :  ' ',
             NARRATION : '',
             STATUS : '',
             }

  constructor( private companyService : CompanyService) {
  
  } ;
/*  
  getCompany() : void {
     this.companies = this.companyService.getCompany() ;
  }
*/
 
 getCompanyById(id : String) :void {
   this.companyService.getCompanyByid(id).subscribe( comByid  => this.companyById = comByid );  
 // console.log(companyById);
 }

  getCompany() : void {
// Observable
  //   this.companyService.getCompany().subscribe(companies => this.companies =  companies)
     this.companyService.getCompanyUrl().subscribe(
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
        }
     )
  }

  getCompanyAssets() : void {
   
  }

  ngOnInit() : void{
    this.getCompany();
  }

  onSelect(company : CompanyInterface ) : void {
             this.selectCompany = company ;
  } ;

  onAdd(){
    console.log(' onAdd ');
    this.selectCompany = this.rowbank;
    this.companies.push(this.rowbank);
   // this.companyService.addCompany(comData)
  }  
  
  onDelete(id :any){
      console.log(' onDelete '+id);

      this.companyService.removeCompany(id)
  }
  
} 

