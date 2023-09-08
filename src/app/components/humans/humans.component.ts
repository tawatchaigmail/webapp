import { Component,OnInit,OnDestroy } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormsModule,FormGroup,FormControl,NgForm} from '@angular/forms';
import {CommonModule,Location} from '@angular/common';
import {Router,
        ActivatedRoute,
        ParamMap,
        RouterModule,
        RouterLink,
        Routes} from '@angular/router';
import {Observable} from 'rxjs';
import { Buffer } from "buffer";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { HumansInterface} from '../../models/humansInterface';
import { HumansService} from '../../service/humans.service';

import { CompanyInterface} from '../../models/companyInterface';
import { CompanyService} from '../../service/company.service';

@Component({
  selector: 'app-humans',
  standalone: true,   
  imports: [
              CommonModule,
              RouterModule,
              ReactiveFormsModule,
              FormsModule,

  ],  
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.scss']
}) 

export class HumansComponent implements OnInit ,OnDestroy {
  companyForm :FormGroup = new FormGroup({
                                          companySelectName : new FormControl(),
                                          nameInput : new FormControl(),
                                        }) ;

  humans : HumansInterface[] = [] ;
 // company? : CompanyInterface ;
  company : any ;
  companies? : CompanyInterface[] = []; 
  logoContentType : string = 'image/jpeg';

//  base64Img? : string | HTMLImageElement | HTMLCanvasElement | Uint8Array | RGBADat ; 
  logoImg? : string  ; 

  
  public totalPage: number = 1 ;
  public activePage: number = 1 ;

  public prevPage: number = 1 ;
  public nextPage: number =  1 ;

  public totalItem: number = 500 ;
  public iPageStart: number = 1 ;
  public iPage: number[] = [] ;

  public perPage: number = 25
  public maxShowPage: number = 10 ;
  public useShowPage: number = 5 ;
  public pointStart: number = 0;
  public pointEnd: number = 0 ;


  constructor(
              private fb :FormBuilder, 
              private humansService : HumansService, 
              private companyService : CompanyService,
              private route : ActivatedRoute,
              private router :Router
              ) {
     this.createForm();
  };
  getCompany() : void {
// Observable

     this.companyService.getCompanyUrl().subscribe(
        (response) => {                           //Next callback
          console.log('response comapanies received')
         // console.log(response);
          this.companies = response; 

        // let objectURL = 'data:image/jpe;base64,'+ response.data.LOGO ;
        // this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);

        },
        (error) => {                              //Error callback
          console.error('Request comapanies failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request comapanies completed')
        }
     )
  }

  getCompanyById( id : string) : void {
          
     this.companyService.getCompanyById(id).subscribe( 
                                                       (response :any) => { 
                                                                           console.log('response company receipve');
                                                                           console.log(response.data[0]);
                                                                           this.company = response 
                                                                          // console.log(this.company.data[0]);
                                                                          },
                                                      
                                                       (error:any) => { 
                                                                    console.error('Request company failed with error')
                                                                    alert(error); 
                                                                   },
                                                       
                                                       () => {console.log('Request company completed')}
                                                     )
  }
  getHumans() : void {
// Observable
  //   this.humansService.getHumans().subscribe(humans => this.humans =  humans)
     this.humansService.getHumans().subscribe(
        (response) => {                           //Next callback
          console.log('response human received')
         // console.log(response);
          this.humans = response; 
        },
        (error) => {                              //Error callback
          console.error('Request human failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request human completed')
        }
     )
  }
  
  onSelect(human :HumansInterface){
  } 

  onAdd(){
  }

  onDelete(id : any){
  }

  submit(){
    console.log(this.companyForm.value);
    console.log(this.companyForm.value.companySelectName);
    this.getCompanyById(this.companyForm.value.companySelectName);
  }

  createForm(){
   // this.companyForm = this.fb.group({});
  }

  ngOnInit() : void{
    this.getCompany();
    this.getHumans();
   
    this.totalItem = this.humans.length;    

    this.activePage = 1 ;
    this.nextPage = 2;    
    this.pointEnd = this.perPage*this.activePage ;
    this.totalPage = Math.ceil(this.totalItem/this.perPage);
   
   if (this.totalPage > this.useShowPage){
      this.useShowPage = 5 ;
   }else {
      this.useShowPage = this.totalPage;
   } 
   console.log('useShowPage :'+this.useShowPage);
   console.log('iPageStart :'+this.iPageStart);
      
   for (let i = this.iPageStart; i<=this.useShowPage;i++){
       console.log('iPage '+i); 
    this.iPage.push(i);
   }
   
    this.route
        .queryParams
        .subscribe((data : any ) => {

                  console.log('data :'+JSON.stringify(data));
                  
                  if (data!=null && data.page!=null){
                      console.log('page :'+data.page);
                      this.activePage = data.page ; 
                      this.prevPage = this.activePage - 1;
                      this.nextPage = this.activePage +1;
                      this.pointStart = (this.activePage-1)*this.perPage;
                      this.pointEnd = this.perPage*this.activePage;
                      this.pagination();
                  }
               });
    
  }

  ngOnDestroy(){
    console.log('onDestroy');
  }
  onGeneratePdfHtml2Canvas() {
    var doc : any = new jsPDF('p', 'pt', 'a4');
    var htmlElement = document.getElementById('tableId');
    // you need to load html2canvas (and dompurify if you pass a string to html)
       doc.addFont('../../../assets/fonts/micross72.ttf','Microsoft Sans Serif', 'normal');

    const opt = {
        callback: function (jsPdf :any) {
           //  doc.save("genPdf.pdf");
            // to open the generated PDF in browser window
            // window.open(jsPdf.output('bloburl'));
            doc.output('dataurlnewwindow');
        },
        margin: [20, 20, 20, 20],
        autoPaging: 'text',
        html2canvas: {
            allowTaint: true,
            dpi: 300,
            letterRendering: true,
            logging: false,
            scale: .8
        }
    };

    doc.html(document.getElementById('humanTableId') as HTMLElement , opt);
  }

  
  onPrint(){
           var doc = new jsPDF('p', 'pt', 'a4');
           doc.addFont('../../../assets/fonts/micross72.ttf', 'Microsoft Sans Serif', 'normal');
           doc.setFont("Microsoft Sans Serif","normal")
           doc.setFontSize(12);
           doc.html(document.getElementById("humanTableId") as HTMLElement , {     // HTMLElement
                                                                              callback: function (doc) {
                                                                                                     //   doc.save();
                                                                                                     doc.output('dataurlnewwindow');
                                                                                                     //  console.log(doc.output('datauristring'));
                                                                                                       },
                                                                            x: 10,
                                                                            y: 10
          });

  }
  onPrintAuto(){ 
           var doc = new jsPDF('p', 'pt', 'a4');
           doc.addFont('../../../assets/fonts/micross72.ttf', 'Microsoft Sans Serif', 'normal');
           doc.setFont("Microsoft Sans Serif","normal")
      autoTable(doc,
                 {
                  html: '#humanTableId',
                  startY: 70,
                  head:[['Header','Company']],
      //            showHead: 'everyPage'|'firstPage'|'never' = 'everyPage''
                  showHead: 'everyPage',        
                  foot:[[' ', 'Price total', '130000', '  ']],
      //            showFoot: 'everyPage'|'lastPage'|'never' = 'everyPage''
                  showFoot: 'lastPage',
                  headStyles :{
                           //    lineWidth: 1, fillColor: [1,1,1], textColor: [255,255,255],
                               lineWidth: 1, fillColor: '#f3f3f3', textColor: '#010101',
                              },
                  footStyles :{ fillColor: '#f3f3f3',textColor: '#010101',},
                 
                  theme: 'grid',      // plain, grid , striped
                  columnStyles: {
                                 0: {
                                    halign: 'left',
                                 
                                    },
                                 1: {
                                      halign: 'left',
                                      font : 'Microsoft Sans Serif',
                                    cellWidth: 50,
                                    },
                                 2: {
                                    halign: 'left',
                                    font : "Microsoft Sans Serif",
                                    },
                                 3: {
                                     halign: 'left',
                                     font : "Microsoft Sans Serif",
                                    },
                                 4: {
                                     halign: 'center',
                                  
                                    }

                                },
                 // pageNumber : 1 ,
                  didDrawCell: (data) => {
                                       //  console.log(data)
                                       //  if (data.section === 'body' && data.column.index === 0) {
                                         if (data.section === 'head' && data.column.index === 0) {
                                                                                                   var base64Img = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=='
                                                                                                //  doc.addImage('../../../assets/nw.jpg', 'JPEG', data.cell.x + 2, data.cell.y + 2, 10, 10)
                                                                                                 }
                  },
                 willDrawCell: (data) => {} ,
                 didDrawPage: (data) => {
                                      //  console.log(data)
                                        console.log('data:'+this.logoContentType+';base64,'+this.company.data[0]);
                                        var base64Img =  'data:'+this.logoContentType+';base64,'+new Buffer(this.company.data[0].LOGO.data).toString('base64') ;

                                      //  var base64Img =  'data:'+this.logoContentType+';base64'+this.company?.LOGO;
                                         
                                      //  doc.addImage('../../../assets/nw.jpg', 'JPEG', 40, 20, 40, 40);
                                        doc.addImage(base64Img, 'JPEG', 40, 20, 40, 40);

                                        doc.setFontSize(10);
                                        doc.text('Reort Name Human',80,40);
                                        doc.setFontSize(10);
                                        doc.text(this.company.data[0].COMPANY+' '+this.company.data[0].DESCRIPTION,80,55);
                                        doc.text(' Page '+data.pageNumber,520,20)

                 } ,
               //  willDrawPage: (data : any)  => {} ,

                 

                 }
          
      );

//      doc.output('dataurlnewwindow');
//      console.log(doc.output('dataurlstring'));
      doc.save('table.pdf');                
  }


  changePage(value : any){
      this.activePage = value;
      this.router.navigate(['/humans/'], {queryParams : {page: value}});
  };  

  pagination(){
     if(this.activePage > this.useShowPage){
       if(this.activePage + 2 <= this.totalPage ){
         this.iPageStart = this.activePage - 2 ;
         this.maxShowPage = this.activePage + 2 ;
       } else {
            if (this.activePage <= this.totalPage) {
                this.iPageStart = (this.totalPage+1) - this.useShowPage ;   
                this.maxShowPage = (this.iPageStart -1) + this.useShowPage ; 
            }
       }
        this.iPageStart = 1;
        this.iPage = [];
        for (let i = this.iPageStart; i <= this.maxShowPage; i++){
            this.iPage.push(i);
        }
      
     }else{
        this.iPageStart = 1;
        this.iPage = []  ;
        for (let i = this.iPageStart; i <= this.useShowPage; i++){
            this.iPage.push(i);
        }
     }
  }

}



/*
doc.output('save', 'filename.pdf'); //Try to save PDF as a file (not works on ie before 10, and some mobile devices)

doc.output('arraybuffer');
doc.output('blob');
doc.output('bloburi');
doc.output('bloburl');
doc.output('datauristring');        //returns the data uri string
doc.output('dataurlstring');
doc.output('datauri');              //opens the data uri in current window
doc.output('dataurl');
doc.output('dataurlnewwindow');     //opens the data uri in new window
doc.output('pdfobjectnewwindow');
doc.output('pdfjsnewwindow');
*/


