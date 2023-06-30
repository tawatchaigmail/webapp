import companyInterface from './companyInterface';
export class CompanyModel{
 public company : CompanyInterface ;
   
   constructor(com : CompanyInterface){
     this.company = com;
   }
}