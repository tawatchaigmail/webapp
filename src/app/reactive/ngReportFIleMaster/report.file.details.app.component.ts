import {Component,OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
            selector    :  'app-master-report-file',
            templateUrl :  './report.file.details.app.component.html',
            styleUrls   : ['./report.file.details.app.component.scss'],
            standalone  : true,
            imports : [RouterOutlet],
})

export class MasterReportFileDetailComponent implements OnInit {
                                             
     constructor() {
     }
     ngOnInit(){}
          
}