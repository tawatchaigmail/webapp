import { Component,OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { HumansInterface} from '../../models/humansInterface';
import { HumansService} from '../../service/humans.service';

import { CompanyInterface} from '../../models/companyInterface';
import { CompanyService} from '../../service/company.service';

@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.scss']
}) 

export class HumansComponent implements OnInit {

  humans : HumansInterface[] = [] ;
  company? : CompanyInterface ;
//  base64Img? : string | HTMLImageElement | HTMLCanvasElement | Uint8Array | RGBADat ; 
  logoImg? : string  ; 

  constructor( private humansService : HumansService, private companyService : CompanyService) {
  
  };

  getCompanyById( id : string) : void {
          
     this.companyService.getCompanyById(id).subscribe( 
                                                       (response :any) => { this.company = response },
                                                      
                                                       (error:any) => { 
                                                                    console.error('Request failed with error')
                                                                    alert(error); 
                                                                   },
                                                       
                                                       () => {console.log('Request completed')}
                                                     )
  }
  getHumans() : void {
// Observable
  //   this.humansService.getHumans().subscribe(humans => this.humans =  humans)
     this.humansService.getHumans().subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.humans = response; 
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
  
  onSelect(human :HumansInterface){
  } 

  onAdd(){
  }
  onDelete(id : any){
  }
  ngOnInit() : void{
    this.getHumans();
  }

  onGeneratePdfHtml2Canvas() {
    var doc : any = new jsPDF('p', 'pt', 'a4');
    var htmlElement = document.getElementById('tableId');
    // you need to load html2canvas (and dompurify if you pass a string to html)
       doc.addFont('../../../assets/fonts/micross72.ttf','Microsoft Sans Serif', 'normal');

    const opt = {
        callback: function (jsPdf :any) {
            doc.save("genPdf.pdf");
            // to open the generated PDF in browser window
            // window.open(jsPdf.output('bloburl'));
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
                                                                                                       doc.save();
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
                                        console.log(data)
                                        var base64Img = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=='
                                      //  doc.addImage('../../../assets/nw.jpg', 'JPEG', 40, 20, 40, 40);
                                        doc.addImage(base64Img, 'JPEG', 40, 20, 40, 40);

                                        doc.setFontSize(10);
                                        doc.text('Reort Name',80,40);
                                        doc.setFontSize(10);
                                        doc.text('Project Name',80,55);
                                        doc.text(' Page '+data.pageNumber,520,20)

                 } ,
               //  willDrawPage: (data : any)  => {} ,

                 

                 }
          
      );


      doc.save('table.pdf');                
  }

}
