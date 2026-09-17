@Componet({/*......*/})

export class Number {
        readonly numb = signal(2)
        readonly logDoubleNumberEffect = effect(() =>{
           console.log(this.num *2)
        });
        readonly logDoubleNuber = signalMethod<number>((num) => {
            console.log(num*2);
        })

         constructor() {
            this.logDoubleNumber(this.num);
          }
}