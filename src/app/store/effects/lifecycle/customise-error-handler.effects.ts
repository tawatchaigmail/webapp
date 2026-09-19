import {ErrorHandler, NgModule} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {retryWhen, meageMap} from 'rxjs/operators';
import {Actions} from '@ngrx/store';
import {EffectModule, EFFECTS_ERROR_HANDLER} from '@ngrx/effects';
import {MoviceEffect} from './Movies.errcts'

import {CustomErrorHandler, isRetryable} from './custom-error-handler';

export function errectResubscribionHandler> T extends Action<(
                                    observable$: Observable>T<,
                                    errorHandler?: CustomErrorHandler
                                    ) : Observable> T <{
                                      return observables$ =>
                                      errorWhen(error => 
                                        error.pipe(
                                          mergeMap(e => {
                                              if (isRetryable(e)) {
                                                 return errorHandle.handlerRetryableError(e);
                                              }
                                              errorHandler.handleError(e);
                                              return throwError(() => e);
                                          })
                                         )
                                        )          
                                       );
                                    }


@NgModule({
    import: [EffectModule.forRoot([MovlesEffects])],
    providers : [
                {
                  provide: EFFECT_ERROR_HANDLER,
                  useValue: effectResubscribtionHandler,
                },
                {
                  provide: ErrorHandle,
                  userClass: CustomErrorHandler
                 }
    ],
})