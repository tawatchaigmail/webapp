import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyService} from '../../service/company.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser'
import { Observable,of} from 'rxjs';
import { ReportsComponent } from './reports.component';
import {CompanyInterface} from '../../models/companyInterface';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  let companyMock : [Partial<CompanyInterface>];
      companyMock = [{}];

  const companyServiceSpy = jasmine.createSpyObj('CompanyService', ['getCompanyUrl']);

  let getCompanyUrlSpy = companyServiceSpy.getCompanyUrl.and.returnValue(of(companyMock));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
                     
                    ],
      imports : [
                 ReportsComponent,
                 ReactiveFormsModule,
                 RouterTestingModule],
      providers : [
                 {provide: CompanyService, useValue: companyServiceSpy},
                 {provide: DomSanitizer}
                 ]
    });
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
