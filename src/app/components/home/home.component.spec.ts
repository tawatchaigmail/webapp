import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import {SelectivePreloadingStrategyService} from '../../service/selective-preloading-strategy.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let teste : HomeComponent;
  let route : ActivatedRoute  ;
  let preloadStrategy : SelectivePreloadingStrategyService ;

  let selectivePreloadingStrategyServiceStub: Partial<SelectivePreloadingStrategyService>;

  selectivePreloadingStrategyServiceStub = {
  }

  let el: HTMLElement;
  let selectivePreloadingStrategyService : any;

  beforeEach(() => {

  //  teste = new HomeComponent(route,preloadStrategy);
    
    TestBed.configureTestingModule({
        declarations: [
         // HomeComponent
        ] ,
      
        imports: [
                  RouterTestingModule,
        //          ActivatedRoute 
        ],
      
        providers : [
                     {provide: SelectivePreloadingStrategyService, useValue: selectivePreloadingStrategyServiceStub },
        //             {provice:ActivatedRoute}
                    ]
    });
    
    fixture = TestBed.createComponent(HomeComponent);    
    component = fixture.componentInstance;
    selectivePreloadingStrategyService  = TestBed.inject(SelectivePreloadingStrategyService);
    fixture.detectChanges();
 
    el = fixture.nativeElement.querySelector('.results');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
 