import {Component,OnInit} from '@angular/core';

import {CommonModule} from '@angular/common';
 
@Component({
      selector : 'semd-com', 
      templateUrl : './send.html',
      styleUrls : ['send.scss']
})

export class SendComponent implements OnInit {

  public details?: string;
  public sending:boolean = false;

  cancel(){
  }
  send(){
  }
  ngOnInit() {
  }
}