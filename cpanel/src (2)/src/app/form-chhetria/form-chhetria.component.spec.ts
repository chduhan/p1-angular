import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChhetriaComponent } from './form-chhetria.component';

describe('FormChhetriaComponent', () => {
  let component: FormChhetriaComponent;
  let fixture: ComponentFixture<FormChhetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormChhetriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormChhetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
