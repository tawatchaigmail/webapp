import { Component,Input,OnInit,Output, OnChanges, SimpleChanges, signal, EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
//import {DetailReportParameterComponent} from './components/detail.report.file.parameter/detail.report.file.parameter.component'

import {RouterOutlet, 
        Router, 
        Resolve, 
        ActivatedRouteSnapshot,   
        ActivatedRoute,
 //     NavigationExtras,
        RouterStateSnapshot} from '@angular/router';

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'
import {ReportFileParametersForms,ReportFileParametersFormsId,Response} from '../../../../models/ngrx/reportFileParametersInterface'

import {ReportFileParametersFormService} from '../../../../service/ngrx/reportFileParamsters.form.service';


@Component({
  selector: 'app-report-parameter-list',
  templateUrl: './report.master.parameters.list.component.html',
  styleUrls: ['./report.master.parameters.list.component.scss'],
  standalone : true,
  
  imports : [
             CommonModule,
             RouterOutlet
            ],
})
export class ReportMasterParametersListComponent implements OnInit, OnChanges {
  reportFileParameters? : any = [] ;
//  reportFileParameters : ReportFileParametersForms[] = [] ;
 
   refId: ReportFileParametersFormsId = {
                                             seqNo     : 0 ,
                                             reportId  : 0 
                                             };
  @Output() newItemEvent = new EventEmitter<ReportFileMastersForms>();

  @Input() reportFileMasterChild : ReportFileMastersForms = 
                                            {
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
                                             paperSize   : "",
                                            } ;

  @Input() reportFileParameter  : ReportFileParametersForms = {
                                        reportId       : 1,
                                        seqNo          : 1,
                                        parameterName  : "rpt_contry",
                                        initialValue   : "0",
                                        initialValueTo : "0",
                                        dataType       : "number",
                                        description    : "Contry",
                                        rgText2        : "hrifdgdr",
                                        rgText         : "hrifdgdr",
                                        updatedAllowed : "N",
                                        multiFlag      : "Y"
   };
  
  constructor(
               private route : ActivatedRoute  ,   
              //  private route : Router ,
                private http : HttpClient ,
                private reportFileParametersService : ReportFileParametersFormService
      //        reportFileMaster : ReportFileMastersForms,
      //        reportFileParameter  : ReportFileParametersForms
             ) {
    //   this.reportFileMaster = reportFileMaster ;
    //   this.reportFileParameter = reportFileParameter ;
  }

  ngOnInit() {
     console.log('ReportMasterParametersListComponent reprotId : '+this.reportFileMasterChild.reportId);
    /*
     this.reportFileParametersService.getApiAll().subscribe(res => {
       console.log('res');
      // console.log(JSON.stringify(res));
       this.reportFileParameters = JSON.stringify(res) ;
     });

     */
    //    this.reportFileParameters = this.reportFileParametersService.getApiAll() ;

        this.reportFileParameters = this.reportFileParametersService.getDataByReportId(this.reportFileMasterChild.reportId);

   //     this.reportFileParameters = this.reportFileParametersService.getDataByReportId(1);
                          
        console.log('reportFileParameters : '+this.reportFileParameters.length);              
  }

  ngOnInit_http() {
  /* 
     this.http.get<ReportFileParametersForms[]>('/assets/data_report_file_parameters.json').subscribe(res => {
       this.reportFileParameters = JSON.stringify(res) ;
     });
  */
      console.log('ReportMasterParametersListComponent');
      if (this.reportFileParameters === undefined) {
        this.reportFileParameters = this.http.get<Response>('/assets/data_report_file_parameters.json').pipe(map(i => i.results))
      }
      else {
        this.reportFileParameters = this.http.get<Response>('/assets/data_report_file_parameters.json').pipe(map(i => i.results.find(elemsnt => elemsnt.reportId = this.reportFileMasterChild.reportId)))
      }

       console.log( ' reportId '+this.reportFileMasterChild.reportId +' length '+this.reportFileParameters.length);
  }

  ngOnChanges(change : SimpleChanges){
      console.log('ReportMasterParametersList ngOnChanges :'+this.reportFileMasterChild.reportId);
     this.reportFileParameters = this.reportFileParametersService.getDataByReportId(this.reportFileMasterChild.reportId);
  } 

  onSelect(select : ReportFileParametersForms){

   // this.reportFileParameters.set(select);
    
    console.log('onSelect');

    this.reportFileParameters
  }

  onAdd(value  : ReportFileParametersForms){
      //   let id : string  = this.route.paramMap.get('id') as string; 
      //   this.route.navigate(['/detail/add']);
          console.log(' onAdd route :');
  }

  onAddNewItem(value  : ReportFileMastersForms){
      this.newItemEvent.emit(value);
  }

  onEdit(select : ReportFileParametersForms){}

  onRemove(select : ReportFileParametersForms){
        this.refId = {
                      seqNo  : select.seqNo ,
                      reportId  : select.reportId 
                      };
        console.log('onRemove seqNo :'+this.refId.seqNo+'  reportId : '+this.refId.reportId );
        this.reportFileParametersService.removeDataById(this.refId);
  }
}
