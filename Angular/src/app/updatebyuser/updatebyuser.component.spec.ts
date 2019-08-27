import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebyuserComponent } from './updatebyuser.component';

describe('UpdatebyuserComponent', () => {
  let component: UpdatebyuserComponent;
  let fixture: ComponentFixture<UpdatebyuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebyuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
