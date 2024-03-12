import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import {Observable,of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';

import { HumansService} from '../../service/humans.service';
import { CompanyService} from '../../service/company.service';
import { HumansComponent } from './humans.component';

import {HumansInterface} from '../../models/humansInterface';
import {CompanyInterface} from '../../models/companyInterface';

describe('HumansComponent', () => {
  let component: HumansComponent;
  let fixture: ComponentFixture<HumansComponent>;

  let humansService : HumansService ;
  let companyService : CompanyService ;
//  let humansMock : Partial<HumansInterface>;

  let humansMock : [Partial<HumansInterface>];
      humansMock = [{}] ;
  
  let companyMock : [Partial<CompanyInterface>];
      companyMock = [{}];

  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpHumansSpy: jasmine.SpyObj<HumansService>;
  let httpCompanySpy: jasmine.SpyObj<CompanyService>;
  let humanSpy: jasmine.SpyObj<HumansService>;

//  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  const humansServiceSpy  = jasmine.createSpyObj('HumansService', ['getHumans']);
  const companyServiceSpy = jasmine.createSpyObj('CompanyService', ['getCompanyUrl']);

  let getHumansSpy = humansServiceSpy.getHumans.and.returnValue(of(humansMock));
//  let getCompanyUrlSpy = companyServiceSpy.getCompanyUrl.and.returnValue(of(companyMock));
  let getCompanyUrlSpy = companyServiceSpy.getCompanyUrl.and.returnValue(of(companyMock));
          
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
               //      HumansComponent,
               //      MockComponent(HumansComponent)
                    ],
      imports : [RouterTestingModule],
      providers:[
                 {provide: HumansService,  useValue: humansServiceSpy},
                 {provide: CompanyService, useValue: companyServiceSpy},
               //  {provice: ActivatedRoute}
                ]
    });
    fixture = TestBed.createComponent(HumansComponent);
    component = fixture.componentInstance;
    humansService  = TestBed.inject(HumansService);
    companyService  = TestBed.inject(CompanyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
