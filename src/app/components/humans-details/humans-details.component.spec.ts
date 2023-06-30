import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumansDetailsComponent } from './humans-details.component';

describe('HumansDetailsComponent', () => {
  let component: HumansDetailsComponent;
  let fixture: ComponentFixture<HumansDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumansDetailsComponent]
    });
    fixture = TestBed.createComponent(HumansDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
