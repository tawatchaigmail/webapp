import  {CompanyInterface} from './companyInterface';
import {formatDate}  from '@angular/common';

const  format : string = 'yyyy-MM-dd';
const  locale : string = 'en-US';

/*
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString()
*/

export const CompanyModels : CompanyInterface[] = [
             {
             SEQ_NO : 1 ,
             COMPANY : 'PE',
             DESCRIPTION : 'Plan',
             COMPANY_ADDRESS : ' MBK Center Tower, Phayathai Rd.',
             TELEPHONE : '',
             TAX_ID : '',
             CREATED_BY :  new Date().toDateString(),
            // CREATED_ON :  formatDate(Date.now(),format,locale),
             CREATED_ON :  Date.now(),             
             LAST_UPD_BY :  new Date().toISOString(),
             LAST_UPD_ON :  new Date(),             
             NARRATION : '', 
             STATUS : 'A',
             LOGO : '',
             logoContentType : 'image/jpeg',
             },
             {
             SEQ_NO : 2 ,
             COMPANY : 'MS',
             DESCRIPTION : 'MBK Sukhumvit',
             COMPANY_ADDRESS : '444 8th Fl. MBK Center Tower, Phayathai Rd.',
             TELEPHONE : '',
             TAX_ID : '',
             CREATED_BY :  new Date().toDateString(),
            // CREATED_ON :  formatDate(Date.now(),format,locale),             
             CREATED_ON :  Date.now(), 
             LAST_UPD_BY :  new Date().toISOString(),
             LAST_UPD_ON :  new Date(),             
             NARRATION : '',
             STATUS : 'A',
             LOGO : '',
             logoContentType : 'image/jpeg',
             },
             {
             SEQ_NO : 3 ,
             COMPANY : 'ME',
             DESCRIPTION : 'MBK Sukhumvit',
             COMPANY_ADDRESS : '444 8th Fl. MBK Center Tower, Phayathai Rd.',
             TELEPHONE : '',
             TAX_ID : '',
             CREATED_BY :  new Date().toDateString(),
            // CREATED_ON :  formatDate(Date.now(),format,locale),             
             CREATED_ON :  Date.now(),
             LAST_UPD_BY :  new Date().toISOString(),
             LAST_UPD_ON :  new Date(),             
             NARRATION : '',
             STATUS : 'A',
             LOGO : '',
             logoContentType : 'image/jpeg',
             },
               
   ];



