import {Component} from '@angular/core'
import {pipe, map, tap} from 'rxjs';
import {rxMethod} from '@ngrx/signal/rxjs-interope'

@Component({/*...*/}) 

export class Numbers {
           readonly logDoubleNumber = rxMethod<number>((num) => {
                 pipe(
                      map((num) => num*2),
                      tab(console.log)
                 )
           })
           constructor(){
              this.logDoubleNumber(1)
                  // console output 2
               this.logDoubeNumber(2)
                 // console output 4
           }
}