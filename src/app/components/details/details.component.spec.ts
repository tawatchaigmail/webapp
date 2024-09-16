//import {FormsModule,Validators,ControlContainer,FormGroup,FormControl,NgForm} from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable,of} from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from './details.component';
import { HousingService } from '../../service/housing.service';
import { HousingLocation } from '../../models/housinglocation';

//import { CommonModule } from '@angular/common';
//import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  
  let teste : DetailsComponent ;
  let route : ActivatedRoute  ;
  let housingService : HousingService ;

  let housingMock : Partial<HousingLocation>;
      housingMock = {

      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true

  } ;


  const housingServiceSpy  = jasmine.createSpyObj('HousingService',['getHousingLocationById','getAllHousingLocations','submitApplication'],['housingLocationList']);

  let getHousingSpy = housingServiceSpy.getHousingLocationById.and.returnValue(of(housingMock));
//  let getHousingSpy = housingServiceSpy.getHousingLocationById(0);   

    
  beforeEach(() => {
//    teste = new DetailsComponent(route, housingService);
     housingService = new HousingService();

    TestBed.configureTestingModule({      
      declarations : [DetailsComponent],
      imports : [
                 RouterTestingModule,
                 ReactiveFormsModule
                ],
      providers : [
                   {provide: HousingService, useValue: housingService },
                    
                 //  {provide: ActivatedRoute}
                  ]
    });
    
//    route = TestBed.get(ActivatedRoute);
//    housingService = TestBed.get(HousingService);

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    housingService  = TestBed.inject(HousingService);
  //  route           = TestBed.inject(ActivatedRoute);
        
    fixture.detectChanges();
    
  });
     
  it('should create', () => {
    console.log('should create');
    expect(component).toBeTruthy();
  });
   
});
