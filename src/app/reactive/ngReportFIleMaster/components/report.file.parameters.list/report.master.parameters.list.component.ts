import { Component,Input,OnInit,Output } from '@angular/core';
//import {DetailReportParameterComponent} from './components/detail.report.file.parameter/detail.report.file.parameter.component'

import {ReportFileParametersForms} from '../../../../models/ngrx/reportFileParametersInterface'

@Component({
  selector: 'app-report-parameter-list',
  templateUrl: './report.master.parameters.list.component.html',
  styleUrls: ['./report.master.parameters.list.component.scss'],
 // stanalone : false,
  imports : [
            ]
})
export class ReportMasterParametersListComponent implements OnInit {

  @Input() reportFileParameters  : ReportFileParametersForms[] = [] ;
  constructor() { }

  ngOnInit() {
  }

}
