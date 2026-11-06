import {Component, OnInit} from '@angular/core';
//import {RouterOutlet} from '@angular/router';

//import {ReportFileMasterListsComponent}      from '../components/report.file.master.lists/report.file.master.lists.component';
//import {ReportMasterParametersListComponent} from '../components/report.file.parameters.lists/report.master.parameters.list.component';


@Component({
            selector    :  'app-containers-layout',
            templateUrl :  './containers.layout.html',
            styleUrls   : ['./containers.layout.scss'],
            standalone  : true,
            imports : [
            //          RouterOutlet,
            //          ReportFileMasterListsComponent,
            //          ReportMasterParametersListComponent
                      ],
})

export class ContainersLayoutComponent implements OnInit {
                                             
     constructor() {
     }
     ngOnInit(){}
          
}