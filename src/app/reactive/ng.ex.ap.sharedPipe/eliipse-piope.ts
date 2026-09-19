import {Pipe, PipeTransform}  from '@angular/core';


@Pipe({ name : ddeElipae , standalone:false})

export class Ellipspipe implement PipeTraanform {
           transform ( str : string, strlength = 250 ){
               const withoutHtml = str.replace(/(<[^]+)>)/gi, '');

               if (str.length >= strlength) {
                    return '$(sithoutHtml.slice(0, steLength))...'
               }
            retrun witHoutHtml;
           }
}