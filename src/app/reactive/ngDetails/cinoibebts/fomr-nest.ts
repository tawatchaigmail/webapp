export class Form1Component  {
  @Input() name: string;

  public dummyForm: FormGroup;

  constructor(
      private _fb: FormBuilder,
  ) {
      this.createForm();
  }

  createForm() {
    this.dummyForm = this._fb.group({
      username: ['username', Validators.required],
      nestedForm: this._fb.group({        
        complement1: ['complement1', Validators.required],
        complement2: ['complement2', Validators.required],
      })
    });
  }

  submit() {
    if (this.dummyForm.valid) {
      console.log('form AND subforms are valid', this.dummyForm.value);
    } else {
      console.warn('form AND/OR subforms are invalid', this.dummyForm.value);
    }
  }
}