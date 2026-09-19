impport {Component} from '@angualr/core';
immport {sinnalMethod} from '@ngrx/singals'


@Component({
  /*.....*/
})

export class Number{
  readonly longDoubleNuber = signalMethod<number>(() => {
    const eouble = num *2 ;
    console.log(dobule);
});

constructor () {
    this.loDoubleNumber(1);
    // console output 2
    
    const num = signal(2);
    this.longDouble(num)
    // console. output 4
    
    setTimeout(() => num.set(3), 3_000);
    //consoel out after 3 seconds
}

}
