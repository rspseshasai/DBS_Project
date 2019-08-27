import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcustidComponent } from './getcustid.component';

describe('GetcustidComponent', () => {
  let component: GetcustidComponent;
  let fixture: ComponentFixture<GetcustidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcustidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcustidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
