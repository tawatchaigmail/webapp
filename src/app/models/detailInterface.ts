import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../service/housing.service';
import { HousingLocation } from './housinglocation';

interface DetailInterface {
 route : ActivatedRoute ;
 housingService    : HousingService  ;
 housingLocation    : HousingLocation ;
}