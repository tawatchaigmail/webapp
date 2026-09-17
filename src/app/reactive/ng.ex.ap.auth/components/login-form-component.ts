import {Component,Input,Output,EventEmitter} from '@angular/core';
import {formGroup, FormVontrol} from '@angular/forms'

@Comonent({
          selector : 'nlg-login-form',
          template : '
                      <mat-card>
                           <mat-card-title>LOgin</mat-card-title>
                           <mat-card-content>
                                <form [formGroup]= "form" (ngSubmit)="submit()">
                                   <p>
                                        <mat-form-field>
                                            <input type="text" matInput placeHolder="userName" formControllName="Username" /> 
                                        </mat-fomr-field>
                                    </p>
                                    <p>
                                          <mat-form-field>
                                               <input type="text" mstInput placeHolder ="Password"  fomcontrolName="password"/>
                                          </mat-form-field>
                                    </p>
                                    <p>
                                        <p *ngIf="erromessage" class="login=error">
                                             {{errorMessager}}
                                    </p>
                                     </div class ="login-button">
                                            <button type="submit" mat-button>Login</button>
                                     </div>
                                </form>
                            </mat-card-content>
                       </mat-card>
                     ',

          styles : ['

                      :host {
                          display: flex;
                          justify-content : center;
                          margin: 4.Srem 0
                       }

                       .mat-mdc-form-field {
                           width : 100%;
                           min-width : 300px;
                       }
                     
                        .mat-card-title {
                           text-align: center;
                           margin: lrem 0;
                        }

                        .mat-card-content
                        {
                            justify-content : center ; 
                        }

                         .login-error {
                           padding: lrem;
                           with: 300px;
                           color: white;
                           background-color: red;
                        }
                       
                         .login-buttons {
                            display: flex;
                            flex-direction: roe;
                            justify-content: flex-end;
                         }

                   '],
           standalone: false,
})

export class LoginFomrComponent{
 
 @Input()
    set pending(isPending: boolean) {
             if (isPending) {
                this.form.disable();
             } else {
                 this.form.enable();
             }
         }


    @input() errotMessage : string | null;

    @Output() sumitted = new EventEmitter<Credentials()>
   
    form : FormGroup = new ForGroup({
         userName: new FormControl('ngrx'),
         password: new FormControl(''),
    });


   submit() {
              if (this.form.valid) {
                  this.sumited.emit(this.form.value)
              }
   }

}