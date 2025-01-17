import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhansAboutComponent } from './duhans-about.component';

describe('DuhansAboutComponent', () => {
  let component: DuhansAboutComponent;
  let fixture: ComponentFixture<DuhansAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuhansAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuhansAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
