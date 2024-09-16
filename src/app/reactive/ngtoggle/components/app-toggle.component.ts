
import {Component, Input,OnInit} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';


@Component({
  selector : 'toggle',
  templateUrl :  './app-toggle.component.html',

 // styleUrls : ['./app-toggle.component.scss'],
  
})

export class AppToggleComponent implements OnInit {

  ngOnInit(){

    console.log('AppToggleComponent');
  }

  logFirst(obj: { checked: boolean }) {
    console.log('first toggle:', obj.checked);
  }

  logSecond(obj: { checked: boolean }) {
    console.log('second toggle:', obj.checked);
  }
}
