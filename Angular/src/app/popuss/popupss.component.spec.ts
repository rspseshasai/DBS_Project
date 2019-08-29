import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupssComponent } from './popupss.component';

describe('PopupComponent', () => {
  let component: PopupssComponent;
  let fixture: ComponentFixture<PopupssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
