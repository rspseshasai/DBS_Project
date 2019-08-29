import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedtransComponent } from './reportedtrans.component';

describe('ReportedtransComponent', () => {
  let component: ReportedtransComponent;
  let fixture: ComponentFixture<ReportedtransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedtransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
