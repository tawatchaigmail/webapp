import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms'; 

@Component(
            {
              selector : 'ngx-app-master',
              templateUrl : './master.component.html',
              styleUrls : ['./master.component.scss'],
              standalone : true,
              imports : [],
            
})

export class MasterComponent implements OnInit {
    ngOnInit(){
        console.log('master component');
    }
}