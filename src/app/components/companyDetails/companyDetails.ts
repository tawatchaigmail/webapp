import {Component,Input,OnInit} from '@angular/core';
import {FormsModule,FormGroup,FormControl,NgForm} from '@angular/forms';
import {CommonModule,Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import {CompanyInterface} from '../../models/companyInterface';
import {CompanyService} from '../../service/company.service';

@Component({
  selector : 'com-details',
  standalone: true,   
  imports: [
              CommonModule,
              FormsModule,
  ],  
  templateUrl : './companyDetails.html',
  styleUrls : ['./companyDetails.scss']
})

export class CompanyDetails implements OnInit {
  @Input() selectDet? : CompanyInterface ;

  constructor( private route : ActivatedRoute  ,
               private companyService : CompanyService, 
               private location :Location){
  }

//  doSubmit(comData : NgForm){
  doSubmit(comData : any){
      console.log(comData.value)
      this.companyService.updateCompany(comData.value.COMPANY ,comData.value)
  }

/*  

  const id = Number(this.route.snapshot.paramMap.get('id'));

  onUpdate(comData :any){
      console.log(' onUpdate '+comData);

  }
*/

ngOnInit(): void {

}

goBack(): void {
  this.location.back();
}

}