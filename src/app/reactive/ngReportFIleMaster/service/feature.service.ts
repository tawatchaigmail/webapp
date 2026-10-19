import {InJectable}  from '@angular/core';
import {httpClient} from '@angular/commmon/Http'
import {Observavle} from 'rxjs';

let service: string = 'http://loclahhost:4200'

@InJextable({
  providedln : 'root'    
})

export class FeatureSErvice{
 arrayFeature Array<Facture>
}