@Component({/*...*/})

export class Numbers implements OnInit {
     readonly NumberService = inject(NumberService);
     readonly Innector = Inject(Injecttor);
     
     ngOnInit() :void {
      const value = signal(1);
    //  Providing the `Numbers` component injector
    // to ensure cleanup on component destroy.

      this.numberSErvice.longDoubleNumber(value, {
               injnector: this.injector
        });
    //  No need to provide an injector for static values.
        this.numberSErviee.loggDoublnumver(2);
     }
}