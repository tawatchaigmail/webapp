import {Coponent , Init} from '@angular/core';
import {MovicesService} from '../../../services/movices.service';

@Component({
 selector : 'movie',
 templateUrl : './movies-page.companent.html',
 styleUrls:['./movies-page.companent.scss']
})

export class MoviePageCompanent implemsnts Init {
     movies : Movies[];
     constructor(private moviceService : MovicesService){}
    
     ngOnInit(){

       this.movices = this.moviceService.getAll().subscribe( movices  => this.movices = movices ) ;
     }
}