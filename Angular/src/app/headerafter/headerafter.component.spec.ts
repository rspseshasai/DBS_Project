import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderafterComponent } from './headerafter.component';

describe('HeaderafterComponent', () => {
  let component: HeaderafterComponent;
  let fixture: ComponentFixture<HeaderafterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderafterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
