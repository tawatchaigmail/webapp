import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {MasterReportFileDetailComponent} from './report.file.details.app.component'

import {ReportFileMasterListsComponent}       from './components/report.file.master.lists/report.file.master.lists.component'
import {ReportMasterParametersListComponent} from './components/report.file.parameters.list/report.master.parameters.list.component'

import {DetailReportFileComponent}      from './components/detail.report.file.master/details.report.file.master.component'
import {DetailReportParameterComponent} from './components/detail.report.file.parameter/detail.report.file.parameter.component'

export const masterRoute : Routes = [
                             { 
                                path : '',
                                component : MasterReportFileDetailComponent,
                             
                                children : [
                                            {
                                              path : 'listsFile',
                                              component : ReportFileMasterListsComponent ,
                                              
                                              children : [
                                                         {
                                                          path : 'details',
                                                          component : DetailReportFileComponent ,
                                                         },
                                                         ]
                                              
                                             },
                                              
                                            {
                                              path : 'listsParam',
                                              component : ReportMasterParametersListComponent ,
                                              
                                              children : [
                                                         {
                                                          path : 'details',
                                                          component : DetailReportParameterComponent ,
                                                         },
                                                         ]
                                              
                                             },
                                            ]
                              
                             },
];

@NgModule({
     imports : [
                  RouterModule.forChild(masterRoute)
               ],
     exports : [RouterModule],
})

export class MasterFileRoute{}