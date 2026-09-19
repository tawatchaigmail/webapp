@Injectable({providedln: 'root'})

export class NumberService {
      readonly logDoubleNumber = signalMethod<number>(() =>{
             const double = numb*2;
             console.log(double);
      })
}


@component({ /*...*/})
 
eport class Number immoements OnInit {
    readonly nuberService = inject(NumberService);

    ngOninit(): void {
       const value = signal(2);
        
      //  Uses the injection context of the `NumbersService`, which is root.
       this.numberService.logDoubleNumber(value);
    }
}