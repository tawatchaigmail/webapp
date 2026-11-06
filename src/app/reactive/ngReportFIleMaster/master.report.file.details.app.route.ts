import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {MasterReportFileDetailAppComponent} from './report.file.details.app.component'

import {ReportFileMasterListsComponent}      from './components/report.file.master.lists/report.file.master.lists.component'  
import {ReportMasterParametersListComponent} from './components/report.file.parameters.lists/report.master.parameters.list.component'

import {DetailReportFileComponent}      from './components/detail.report.file.master/details.report.file.master.component'
import {DetailReportParameterComponent} from './components/detail.report.file.parameter/detail.report.file.parameter.component'

import {ContainersLayoutComponent} from './containers/containers.layout'

export const masterRoute : Routes = [
                             { 
                                path : '',
                                component : MasterReportFileDetailAppComponent,
                             
                                children : [
                                
                                            {
                                              path : 'listsFile',
                                              component : ReportFileMasterListsComponent ,
                                              
                                              children : [
                                                         {
                                                         path : ':id',
                                                  
                                                         component :  DetailReportFileComponent ,
                                                          
                                                         children :  [
                                                                     {
                                                                       path : 'details',
                                                               //        component : ContainersLayoutComponent,
                                                                         component : DetailReportParameterComponent ,
                                                                      },
                                                                     ]
                                                         
                                                         },
                                                         ]
                                              
                                             },
                                            {
                                              path : 'listsParam',
                                              component : ReportMasterParametersListComponent ,
                                              
                                              children : [
                                                         {
                                                          path : ':id',
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