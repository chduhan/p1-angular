import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhansCountryComponent } from './duhans-country.component';

describe('DuhansCountryComponent', () => {
  let component: DuhansCountryComponent;
  let fixture: ComponentFixture<DuhansCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuhansCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuhansCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
