import {Component, Input, OnInit, OnDestroy, Output}  from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

import {CompanyInterface} from '../../models/companyInterface';
 //import {CompanyModels} from '../../models/companyModels';
import {CompanyService} from '../../service/company.service';
import { CompanyDetails } from '../../components/CompanyDetails/CompanyDetails';

@Component({
    selector : 'com-company',
    standalone: true,  
    imports: [
              CommonModule,
              FormsModule,
              CompanyDetails
    ],

    templateUrl : './companyComponent.html' ,
    styleUrls : ['./companyComponent.scss']
})

export class CompanyComponent implements OnInit,OnDestroy{

  selectCompany? : CompanyInterface ;  
  companyById? : CompanyInterface ;
  companies : CompanyInterface[] = [] ;
  rowbank : CompanyInterface =  {
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

  constructor(
              private router : Router, 
              private companyService : CompanyService,
             ) {
  
  } ;
/*  
  getCompany() : void {
     this.companies = this.companyService.getCompany() ;
  }
*/
 
 getCompanyById(id : String) :void {
   this.companyService.getCompanyById(id).subscribe( comByid  => this.companyById = comByid );  
 // console.log(companyById);
 }

  getCompany() : void {
// Observable
  //   this.companyService.getCompany().subscribe(companies => this.companies =  companies)
     this.companyService.getCompanyUrl().subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.companies = response; 
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        }
     )
  }

  getCompanyAssets() : void {
   
  }

  ngOnInit() : void{
    this.getCompany();
  }

  ngOnDestroy(){
    console.log('onDestroy');
  }


  onSelect(company : CompanyInterface ) : void {
             this.selectCompany = company ;
             this.router.navigate(['/company/view/'+this.selectCompany.COMPANY]);
  } ;

  onEdit(company : CompanyInterface ) : void {
             this.selectCompany = company ;
             console.log(' onEdit '); 
             this.router.navigate(['/company/edit/'+this.selectCompany.COMPANY]);
  } ;

  onAdd(){
    console.log(' onAdd ');
    this.router.navigate(['/company/add']);
  //  this.selectCompany = this.rowbank;
  //  this.companies.push(this.rowbank);
   // this.companyService.addCompany(comData)
  }  
  
  onDelete(id :any){
      console.log(' onDelete '+id);

      this.companyService.removeCompany(id)
  }


  onPrint(){
           var doc = new jsPDF('p', 'pt', 'a4');
           doc.addFont('../../../assets/fonts/micross72.ttf', 'Microsoft Sans Serif', 'normal');
           doc.setFont("Microsoft Sans Serif","normal")
           doc.setFontSize(12);
           doc.html(document.getElementById("companyTableId") as HTMLElement , {     // HTMLElement
                                                                              callback: function (doc) {
                                                                                                      doc.output('dataurlnewwindow');   
                                                                                                     //  doc.save();
                                                                                                       },
                                                                            x: 10,
                                                                            y: 10
          });

  }
  onGeneratePdfHtml2Canvas() {
    var doc : any = new jsPDF('p', 'pt', 'a4');
    var htmlElement = document.getElementById('tableId');
    // you need to load html2canvas (and dompurify if you pass a string to html)
       doc.addFont('../../../assets/fonts/micross72.ttf','Microsoft Sans Serif', 'normal');

    const opt = {
        callback: function (jsPdf :any) {
            // doc.save("genPdf.pdf");
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
    doc.html(document.getElementById('companyTableId') as HTMLElement , opt);
  }
  onPrintAuto(){ 
           var doc = new jsPDF('p', 'pt', 'a4');
           doc.addFont('../../../assets/fonts/micross72.ttf', 'Microsoft Sans Serif', 'normal');
           doc.setFont("Microsoft Sans Serif","normal")
      autoTable(doc,
                 {
                  html: '#companyTableId',
                  startY: 70,
                  head:[['Header','Company']],
      //            showHead: 'everyPage'|'firstPage'|'never' = 'everyPage''
                  showHead: 'everyPage',        
                  foot:[[' ', 'Price total', '130000', '  ']],
      //            showFoot: 'everyPage'|'firstPage'|'never' = 'everyPage''
                  showFoot: 'everyPage',
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
                                        console.log(data)
                                        doc.addImage('../../../assets/nw.jpg', 'JPEG', 40, 20, 40, 40);
                                        doc.setFontSize(10);
                                        doc.text('Cpmpany Name',80,40);
                                        doc.setFontSize(10);
                                        doc.text('Project Name',80,55);
                                        doc.text(' Page '+data.pageNumber,520,20)

                 } ,
              //   willDrawPage: (data)  => {} ,
                 

                 }
          
      );

        doc.output('dataurlnewwindow');
    //  doc.save('table.pdf');                
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




