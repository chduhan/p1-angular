import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote02Component } from './quote02.component';

describe('Quote02Component', () => {
  let component: Quote02Component;
  let fixture: ComponentFixture<Quote02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Quote02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quote02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
