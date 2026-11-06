import {Component,OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

//import {ContainersLayoutComponent} from './containers/containers.layout';
//import {ReportFileMasterListsComponent}      from './components/report.file.master.lists/report.file.master.lists.component';
//import {ReportMasterParametersListComponent} from './components/report.file.parameters.lists/report.master.parameters.list.component';
     
@Component({
            selector    :  'app-master-report-file',
            templateUrl :  './report.file.details.app.component.html',
            styleUrls   : ['./report.file.details.app.component.scss'],
            standalone  : true,
            imports : [
                        RouterOutlet,
                     //   ContainersLayoutComponent,
                     //   ReportFileMasterListsComponent,
                     //   ReportMasterParametersListComponent,
                      ],

})

export class MasterReportFileDetailAppComponent implements OnInit {
                                             
     constructor() {
     }
     ngOnInit(){}
          
}