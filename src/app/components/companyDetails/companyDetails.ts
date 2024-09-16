import {Component,ViewChild,ElementRef,Input,OnInit,OnDestroy} from '@angular/core';
import {FormsModule,ReactiveFormsModule ,Validators,ControlContainer,FormGroup,FormControl,NgForm} from '@angular/forms';

import {CommonModule,Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import { Buffer } from "buffer";

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

export class CompanyDetails implements OnInit ,OnDestroy {
//  @Input() selectDet? : CompanyInterface ;

   @ViewChild('detailForm') detailForm? :  NgForm  ;   // ElementRef
 

 //  public detailForm? : NgForm ;
   company : CompanyInterface =  {
             SEQ_NO : 0 ,
             COMPANY : 'AA',
             DESCRIPTION : 'Description',
             COMPANY_ADDRESS : 'Address',
             TELEPHONE : '08-1111-1111',
             TAX_ID : '1-1111-11111-11-1',
             CREATED_BY :  'Plan',             
             CREATED_ON :  Date.now(),
             LAST_UPD_ON :  new Date(),
             LAST_UPD_BY :  'Plan',
             NARRATION : 'Remark',
             STATUS : '',
             LOGO : { data : this.fileupload } ,
             logoContentType : 'image/jpeg',
             } 
  public isSubmitted: boolean = false;
  public choosefile : string = '';
  public previewImg : any;
  public fileupload? : any;
  public files? : any[];

  public previewLoaded :any ;

  public formData = new FormData();

  public arrayBuffer = new ArrayBuffer(100);
//  public typedArray = new TypedArray();
    public buffer = new Buffer('dsdfsafs','base64'); 

  constructor( private route : ActivatedRoute  ,
               private companyService : CompanyService, 
               private location :Location){

  }

//  doSubmit(comData : NgForm){
  doSubmit(comData : any){
      console.log('value :');
      /*
      comData.setValue({
                        "SEQ_NO" : "",
                        "COMPANY": "",
                        "DESCRIPTION" : "",
                        "COMPANY_ADDRESS" : "",
                        "TAX_ID" : "",
                        "TELEPHONE" : "",
                        "CREATED_ON" : "",
                        "CREATED_BY" : "",
                        "NARRATION" : "",
                        "LOGO" : "",
                       });
      */
//      console.log('json :'+JSON.stringify(comData.value));

      
      /*
      for (var value of comData.value ) {
        console.log(value);
        new Buffer(value).toString('base64') ;
      }
      */
      this.formData.delete('Info');
      this.formData.append('Info', JSON.stringify(comData.value));

       let reader = new FileReader();
       //reader.onload = this._handleReaderLoaded.bind(this);
       console.log(' fileupload '+this.fileupload);
       //reader.readAsDataURL(this.fileupload);
       //reader.readAsArrayBuffer(this.fileupload);
       //reader.readAsBinaryString(this.fileupload); 
       //reader.readAsText(this.fileupload);
       
       reader.onloadend = (reaadEvent : ProgressEvent<FileReader>) =>{
                if(reaadEvent.target?.result) {
                  //   console.log(' result '+reaadEvent.target?.result.toString());
                  //   console.log(' result '+reaadEvent.target?.result);
                  //   this.fileupload = new Blob([reaadEvent.target?.result]) ;
                  //   this.formData.append('Info', this.fileupload);
                  //   console.log(comData.value.LOGO) ;  
                 }
             };  
             
       console.log(' file state '+reader.readyState);
   
   
     // this.addCompany.LOGO.data = 'this.fileupload' ;
      console.log('formData Info :'+this.formData.getAll("Info"));
     // console.log('file :'+this.formData.getAll("file"));
      
    //  this.companyService.updateCompany(comData.value.COMPANY ,comData.value)
    //  this.companyService.addCompany(comData.value);
      this.companyService.addCompany(this.formData.get("Info"));
    //  comData.reset();
  }

  addUploadFiles( file :any ) {
      //  console.log( 'file', file )
        for ( let i = 0; i < file.length; i++ ) {
            this.formData.append( "file", file[i], file[i]['name'] );
        }
    }

  onChangePic(e : any){
    //  console.log('onChangePic '+e);
      
      let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

      this.fileupload = file ;
      this.files = e.target.files ;
      if(typeof(file) == "undefined") {
        console.log('please choose file');
        this.choosefile = '';
        this.previewImg = '';
        this.previewLoaded = false;
      }else{
//        this.addUploadFiles(file);
        this.formData.append("file", file);
        const formData = new FormData();
        formData.append("picdata", file);
        console.log('picdata : '+formData.getAll("picdata"));
//        console.log(formData.get("picdata"));
//        console.log(formData.values());
//        console.log(formData.keys());
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
         console.log('ngOnInit id :'+id);
         this.companyService.getCompanyById(id);
      }
   
 }
  ngOnDestroy(){
    console.log('onDestroy');
  }


  goBack(): void {
         this.location.back();
  }
  clearForm(){
  //  this.detailForm.reset();
  }

}