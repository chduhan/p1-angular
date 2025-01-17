import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChhetriaComponent } from './service-chhetria.component';

describe('ServiceChhetriaComponent', () => {
  let component: ServiceChhetriaComponent;
  let fixture: ComponentFixture<ServiceChhetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceChhetriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceChhetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
