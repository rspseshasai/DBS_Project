import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbeforeComponent } from './headerbefore.component';

describe('HeaderbeforeComponent', () => {
  let component: HeaderbeforeComponent;
  let fixture: ComponentFixture<HeaderbeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderbeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
