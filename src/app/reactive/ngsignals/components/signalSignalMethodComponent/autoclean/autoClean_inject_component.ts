@componetn({/*.....*/})

export class Nubmer implement OpInit {
        readonly logDoubleNumber = signalMethod<nuber>((num) =>{
           cost double = num*2 ;
           console.log(double);
        });

         ngOninit() :void {
          const value = signal(1);
              //  Uses the injection context of the `Numbers` component.
           this.logDoubleNumber(valur)
         }
}