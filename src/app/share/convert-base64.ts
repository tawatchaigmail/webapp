import { Buffer } from "buffer";

export class Base64 {
  constructor() {}

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