import { Component ,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-humans-details',
  templateUrl: './humans-details.component.html',
  styleUrls: ['./humans-details.component.scss']
})
export class HumansDetailsComponent implements OnInit, OnDestroy {
 

 ngOnInit(){
 console.log('onInit');
 }

  ngOnDestroy(){
    console.log('onDestroy');
  }


}
