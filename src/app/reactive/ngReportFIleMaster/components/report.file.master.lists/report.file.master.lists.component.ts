import { Component,Input, OnInit,Output } from '@angular/core';
//import {DetailReportFileComponent}      from './components/detail.report.file.master/details.report.file.master.component'
import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'


@Component({
  selector: 'app-file-master-list',
  templateUrl: './report.file.master.lists.component.html',
  styleUrls: ['./report.file.master.lists.component.scss'],
  imports : [
           // DetailReportFileComponent   
  ]
  
})
export class ReportFileMasterListsComponent implements OnInit {

  @Input() reportFileMasters : ReportFileMastersForms[] = [] ;
  constructor() { }

  ngOnInit() {
  }

}
