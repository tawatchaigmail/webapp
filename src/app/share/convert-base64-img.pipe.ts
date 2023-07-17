import { Pipe, PipeTransform } from '@angular/core';
import { Buffer } from "buffer";

@Pipe({
  name: 'base64',
})
export class Base64Pipe implements PipeTransform {
  constructor() {}

  public transform(value: any, contentType: string): any {
 //   var base64Content = `data:${contentType};base64,${value}`;
  

  var base64Content = '';
      if (value == undefined || value == '') {
           base64Content = `data:`+contentType+`;base64,`+value; 
       } else {
           base64Content = `data:`+contentType+`;base64,`+this.encoded64(value.data);     
          // console.log(value.data);
          // console.log(base64Content);
       }

    
    return base64Content;
  }
  public encoded64(value : ArrayBuffer) : string {
     return new Buffer(value).toString('base64') ;
  //   return = Buffer.from(value, 'utf8').toString('base64');
  }
  public decoded64(value : ArrayBuffer) : string {
    return new Buffer(value).toString('base64') ;
  //  return Buffer.from(value, 'base64').toString('utf8');
  } 

}

/*
const decode = (str: string):string => Buffer.from(str, 'base64').toString('binary');
const encode = (str: string):string => Buffer.from(str, 'binary').toString('base64');

*/