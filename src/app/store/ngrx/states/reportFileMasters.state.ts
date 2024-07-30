import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';

export interface ReportFileMastersSate {
               reportFileStore : ReportFileMastersStore ;
}

export interface ReportFileMastersStore {
      // reportFileStore : {
                    
                    //  reportFiles   : ReadonlyArray<ReportFileMasters> ;
                      reportFiles   : ReportFileMasters[] ;
                      reportFileSelect?  : ReportFileMasters ; 
                      showDetail : boolean ;
     //  }  
  }