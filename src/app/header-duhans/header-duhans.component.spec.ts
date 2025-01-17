import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDuhansComponent } from './header-duhans.component';

describe('HeaderDuhansComponent', () => {
  let component: HeaderDuhansComponent;
  let fixture: ComponentFixture<HeaderDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
