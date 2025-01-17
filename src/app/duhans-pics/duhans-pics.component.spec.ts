import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuhansPicsComponent } from './duhans-pics.component';

describe('DuhansPicsComponent', () => {
  let component: DuhansPicsComponent;
  let fixture: ComponentFixture<DuhansPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuhansPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuhansPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
