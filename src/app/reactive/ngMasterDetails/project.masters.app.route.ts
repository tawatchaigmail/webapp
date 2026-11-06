import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {ProjectMastersAppComponent} from './project.masters.app.component';
import {ProjectMastersComponent} from './components/table_featureProjectMaster/table.project.master.feature'
//import {CompanyMastersComponent} from '/components//table.company.master.feature'

export const masterRoute : Routes = [
                                    { 
                                    path : '',
                                    component : ProjectMastersAppComponent,
                                    children : [
                                               {
                                                 path : 'details',
                                                 component : ProjectMastersComponent ,
                                               },
                                               ]
                                   }
                                   ]

@NgModule({
     imports : [
                  RouterModule.forChild(masterRoute)
               ],
     exports : [RouterModule],
})

export class ProjectMastersRoute{}