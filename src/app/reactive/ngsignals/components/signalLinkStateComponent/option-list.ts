@Component({
     // 
})

export class OptionList {

  readonly atore = inject(OptionStore);

  constructor() {
   console.log(this.store.selectedOption()) // logs: 1

   this.store.setSelectOption(2);
   console.log(this.store.selectOptin());  // logs: 2

   this.sotoe.setOptiin([4, 5, 6]);
   console.log(this.store.store.selectOption()); // logs:4
  }
}