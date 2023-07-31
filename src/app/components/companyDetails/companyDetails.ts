import {Component,Input,OnInit,ViewChild} from '@angular/core';
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
//  @Input() selectDet? : CompanyInterface ;
//   @ViewChild('detailForm');
   public detailForm? : NgForm ;
   addCompany : CompanyInterface =  {
             SEQ_NO : 0 ,
             COMPANY : ' ',
             DESCRIPTION : ' ',
             COMPANY_ADDRESS : ' ',
             TELEPHONE : '',
             TAX_ID : '',
             CREATED_BY :  ' ',             
             CREATED_ON :  Date.now(),
             LAST_UPD_ON :  new Date(),
             LAST_UPD_BY :  ' ',
             NARRATION : '',
             STATUS : '',
             LOGO : '',
             logoContentType : 'image/jpeg',
             } 
  public isSubmitted: boolean = false;
  public choosefile : string = '';
  public previewImg : any;
  public fileupload : any;
  public fileList? : any[];
  public previewLoaded :any ;

  constructor( private route : ActivatedRoute  ,
               private companyService : CompanyService, 
               private location :Location){

  }

//  doSubmit(comData : NgForm){
  doSubmit(comData : any){
      console.log(comData.value)
    //  this.companyService.updateCompany(comData.value.COMPANY ,comData.value)
      this.companyService.addCompany(comData.value)
      comData.reset();
  }

  onChangePic(e : any){
      console.log(e);
      
      let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

      this.fileupload = file ;
      this.fileList = e.target.files ;
      if(typeof(file) == "undefined") {
        console.log('please choose file');
        this.choosefile = '';
        this.previewImg = '';
        this.previewLoaded = false;
      }else{
        this.fileupload = file.name;
        this.previewThmbnailu(file) ;    
      }
 }
  
/*
  let id = Number(this.route.snapshot.paramMap.get('id'));
*/

  onUpdate(comData :any){
        console.log(' onUpdate '+comData);
  }

 previewThmbnailu(file:any){
   let imageType = 'image/*';
   if (!file.type.match(imageType)) {
      console.log('invalid');     
      return ;
   }
    
   let reader = new FileReader();
       reader.onload = this._handleReaderLoaded.bind(this);
       reader.readAsDataURL(file);
    
 }


  _handleReaderLoaded(e:any) {
    this.previewImg = e.target.result;
    this.previewLoaded = true;
  } 
  
 ngOnInit(): void {
  //  detailForm = 
  //    let id : string = this.route.snapshot.paramMap.get('id') as string;
  //    let id : string = this.route.snapshot.paramMap.get('id') ?? '';
      let id : string = this.route.snapshot.paramMap.get('id') || '';
      if (id !== null ) {
         console.log('ngOnInit id '+id);
         this.companyService.getCompanyById(id);
      }
 }

  goBack(): void {
         this.location.back();
  }
  clearForm(){
  //  this.detailForm.reset();
  }

}