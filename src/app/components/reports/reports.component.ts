import { Component ,OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable'
import font from '../../fonts/micross72Es-normal';
import {CompanyInterface} from '../../models/companyInterface';
import {CompanyService} from '../../service/company.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})


export class ReportsComponent implements OnInit {

    companies : CompanyInterface[] = [] ;

    constructor(private companyService : CompanyService){

    }


  getCompany() : void {
// Observable

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

  onCanvas(){

        var quotes  = document.getElementById('tableId') ;  // as HTMLElement ;
        html2canvas(quotes as HTMLElement ).then((canvas) => {
                var srcImg  = canvas;
                var sX      = 0;
                var sY      = 980; // start 980 pixels down for every new page
                var sWidth  = 900;
                var sHeight = 980;
                var dX      = 0;
                var dY      = 0;
                var dWidth  = 900;
                var dHeight = 980;

               var onePageCanvas = document.createElement("canvas") ;
//               var onePageCanvas = canvas;
//        onePageCanvas.setAttribute('width', 900);
//        onePageCanvas.setAttribute('height', 980);
          var ctx = onePageCanvas.getContext('2d');
       //   ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);
                var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
                var width         = onePageCanvas.width;
                var height        = onePageCanvas.clientHeight;

        var doc = new jsPDF('p', 'pt', 'a4');
        doc.addFont('../../../assets/fonts/micross72.ttf','Microsoft Sans Serif', 'normal');
        doc.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));      

            doc.save('canvas.pdf');


        })


  }    

  onAutotable(){
      var doc = new jsPDF('p', 'pt', 'a4');

      doc.addFileToVFS('micross72Es-normal.ttf', font);
      doc.addFont('micross72Es-normal.ttf', 'micross72Es', 'normal');

   //   doc.addFileToVFS("../../../assets/fonts/micross.ttf", 'Microsoft Sans Serif');
      doc.addFont('../../../assets/fonts/micross72.ttf','Microsoft Sans Serif', 'normal');
   //   doc.setFont("Microsoft Sans Serif","normal")
//       autoTable(doc,{html: '#tablId'});
      autoTable(doc,
                 {
                  html: '#tablId',
                  startY: 70,
                  foot:[[' ', 'Price total', '130000', '  ']],
                  headStyles :{
                               lineWidth: 1, fillColor: [1,1,1], textColor: [255,255,255],
                              },
                  footStyles :{textColor: [255, 255, 255],},
                  theme: 'grid',
                  

                  columnStyles: {
                                 0: {
                                    halign: 'right',
                                 
                                    },
                                 1: {
                                      halign: 'right',
                                      font : "Microsoft Sans Serif",
                                    cellWidth: 50,
                                    },
                                 2: {
                                    halign: 'right',
                                  
                                    },
                                 3: {
                                     halign: 'right',
                                  
                                    }
                                },

                 }
          //     {html: document.getElementById("tableId") as HTMLTableElement }    // HTMLTableElement
      );


      doc.save('table.pdf');
  }

  onHtml(){
   var doc = new jsPDF('p', 'pt', 'a4');

   doc.addFileToVFS('micross72Es-normal.ttf', font);
   doc.addFont('micross72Es-normal.ttf', 'micross72Es', 'normal');

   doc.addFont('../../../assets/fonts/micross72.ttf', 'Microsoft Sans Serif', 'normal');
   doc.setFont("Microsoft Sans Serif","normal")
   doc.setFontSize(12);
  // doc.html(document.body, {
   doc.html(document.getElementById("tablId") as HTMLElement , {     // HTMLElement
  // doc.html(document.documentElement.innerHTML , {
  // doc.html(document.getElementsByTagName('nametablId').innerHTML as HTMLElement , {
   callback: function (doc) {
     doc.save();
   },
   x: 10,
   y: 10
});
  }

  onPreview(){
             console.log(' length '+this.companies.length);
             
             const doc = new jsPDF('p', 'pt', 'a4');
            // doc.addFont('../../../assets/fonts/micross72.ttf','Microsoft Sans Serif', 'normal');
             var quotes = document.getElementById('content');
             doc.setFontSize(8); 
             for(let i = 0; i < this.companies.length;i++ ){
                  doc.setFont("Microsoft Sans Serif","normal").text(this.companies[i].DESCRIPTION as string,50,15*i );
                  doc.setFont("Microsoft Sans Serif","normal").text(this.companies[i].DESCRIPTION as string,50,15*i );
                //  doc.text('/n')
                //  console.log(' '+this.companies[i].COMPANY);
             }
             doc.save('A4.pdf');
             doc.autoPrint();


  } 

  ngOnInit(){
            this.getCompany();

  }
}



/*
html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});

*/


/*

  const doc = new jsPDF({
    unit: "pt",
    orientation: "p",
    lineHeight: 1.2
  });



function makePDF () {
  var doc = new jsPDF('p', 'pt', 'a4');
      var specialElementHandlers = {

      };
doc.fromHTML(document.getElementById('content'), 15, 15, {
          'width': 250,
          'margin': 1,
          'pagesplit': true,
          'elementHandlers': specialElementHandlers
        });

        doc.save('sample-file.pdf');
}
function makeMultiPage() {

        var quotes = document.getElementById('content');

        html2canvas(quotes, {
            onrendered: function(canvas) {

            //! MAKE YOUR PDF
            var pdf = new jsPDF('p', 'pt', 'letter');

            for (var i = 0; i <= quotes.clientHeight/980; i++) {
                //! This is all just html2canvas stuff
                var srcImg  = canvas;
                var sX      = 0;
                var sY      = 980*i; // start 980 pixels down for every new page
                var sWidth  = 900;
                var sHeight = 980;
                var dX      = 0;
                var dY      = 0;
                var dWidth  = 900;
                var dHeight = 980;

                window.onePageCanvas = document.createElement("canvas");
                onePageCanvas.setAttribute('width', 900);
                onePageCanvas.setAttribute('height', 980);
                var ctx = onePageCanvas.getContext('2d');
                // details on this usage of this function: 
                // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
                ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

                // document.body.appendChild(canvas);
                var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

                var width         = onePageCanvas.width;
                var height        = onePageCanvas.clientHeight;

                //! If we're on anything other than the first page,
                // add another page
                if (i > 0) {
                    pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
                }
                //! now we declare that we're working on that page
                pdf.setPage(i+1);
                //! now we add content to that page!
                pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));

            }
            //! after the for loop is finished running, we save the pdf.
            pdf.save('Test.pdf');
        }
      });
    }

*/
