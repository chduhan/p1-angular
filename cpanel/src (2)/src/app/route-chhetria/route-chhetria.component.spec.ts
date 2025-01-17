import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChhetriaComponent } from './route-chhetria.component';

describe('RouteChhetriaComponent', () => {
  let component: RouteChhetriaComponent;
  let fixture: ComponentFixture<RouteChhetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteChhetriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteChhetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
