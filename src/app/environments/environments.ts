import {EnvironmentInterface} from './environmentInterface'; 

import {StoreDevtoolsModule} from '@ngrx/store-devtools'; 

export const environment : EnvironmentInterface = {
  production : true,
  apiUrl : 'http://192.168.100.74:3002',
};

export const enviromentdevtools = {
    production :false ,
    imports : [ 
               StoreDevtoolsModule.instrument({
                         maxAge : 25,
                         logOnly : false,
                         autoPause : true,
                            features : {
                                    pause : false,
                                    lock : true,
                                    persist : true
                             }
               }),
               ]
} 