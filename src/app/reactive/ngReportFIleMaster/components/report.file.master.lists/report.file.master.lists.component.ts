import {Component,Input, OnChanges, SimpleChanges, OnInit,Output } from '@angular/core';
import { map } from 'rxjs';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';


//import {DetailReportFileComponent}      from './components/detail.report.file.master/details.report.file.master.component';
import {ReportMasterParametersListComponent} from '../report.file.parameters.lists/report.master.parameters.list.component';
import {ReportFileMastersForms,Response} from '../../../../models/ngrx/reportFileMastersInterface';

import {ReportFileMastersFormService} from '../../../../service/ngrx/reportFileMasters.form.service';

import {RouterOutlet, 
        Router, 
        Resolve, 
        ActivatedRouteSnapshot,   
        ActivatedRoute,
 //     NavigationExtras,
        RouterStateSnapshot} from '@angular/router';


@Component({
  selector: 'app-file-master-list',
  templateUrl: './report.file.master.lists.component.html',
  styleUrls: ['./report.file.master.lists.component.scss'],
  standalone : true,
  
  imports : [
             CommonModule,   
             RouterOutlet,
             ReportMasterParametersListComponent
          //   DetailReportFileComponent   
  ],
  
})


export class ReportFileMasterListsComponent implements OnInit, OnChanges {

  
  reportFiles : any ;
//  reportFiles : ReportFileMastersForms[] = [];
                                           /* 
                                            {
                                             "reportId" : 0,
                                             "fileName" : "",
                                             "reportName"  : "",
                                             "description" : "",
                                             "reportGroup" : "",    
                                             "orantation" : "",
                                             "ctrlDocNo" : "",
                                             "flagLogFile" : "",
                                             "paperSize" : ""
                                            },
                                           */ 
                                           
                                           
  @Input() reportFileCurrentInput : ReportFileMastersForms = {
                                                      reportId    : 0,
                                                      fileName    : "",
                                                      reportName  : "",
                                                      description : "",
                                                      reportGroup : "",    
                                                      orantation  : "",
                                                      ctrlDocNo   : "",
                                                      flagLogFile : "",
                                                      showFooter  : "", 
                                                      formFooter  : "",
                                                      paperSize   : ""                                                      
                                                      };
  
  constructor(
              private route : ActivatedRoute  , 
              private http : HttpClient ,
              private reportFileMastersService : ReportFileMastersFormService
     //         private reportFileMaster : ReportFileMastersForms,
              ) {
     //    this.reportFileCurrentInput = reportFileMaster ;
  }

  ngOnInit() {
        console.log('ReportFileMasterListsComponent');  
        /*
        this.reportFileMastersService.getApiAll().subscribe(res =>{
        console.log('res');
        console.log(JSON.stringify(res));
        this.reportFiles = JSON.stringify(res);
        this.reportFileCurrentInput = this.reportFiles[0] ;
        
       });
       */

       this.reportFiles = this.reportFileMastersService.getApiAll() ;
  }

  ngOnInit_http() {
   /*
   this.http.get<Response>('/assets/data_report_file_master.json').subscribe(res =>{
        this.reportFiles = JSON.stringify(res);
       });
   */
   this.reportFiles = this.http.get<Response>('/assets/data_report_file_master.json').pipe(map(i => i.results))
  }
  
  ngOnChanges( change : SimpleChanges){
    console.log(' ReportFileMasterList ngOnChanges');
  }  

  onSelect(select  : ReportFileMastersForms){
    console.log('ReportFileMasterListsComponent');
    this.reportFileCurrentInput = select ;
    console.log('onSelect reportFileCurrentInput.reportId : '+this.reportFileCurrentInput.reportId);
  }

  onAdd(value  : ReportFileMastersForms){
   //  this.reportFileInput = value;
   // this.reportFiles.push(value);

 //   let id : string  = this.route.paramMap.get('id') as string; 
     const id  = this.route.snapshot.params['id'] ;
       
   //   this.route.navigate(['/detail/add']);
      console.log(' onAdd route :'+id);

  }
  onEdit(select : ReportFileMastersForms){
     this.reportFileCurrentInput = select;

  }
  onRemove(select : ReportFileMastersForms){
    this.reportFileCurrentInput = select;
    console.log('onRemove reportId : '+this.reportFileCurrentInput.reportId);
    this.reportFileMastersService.getDataById(this.reportFileCurrentInput.reportId);
  }
}
