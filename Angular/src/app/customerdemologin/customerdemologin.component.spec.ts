import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdemologinComponent } from './customerdemologin.component';

describe('CustomerdemologinComponent', () => {
  let component: CustomerdemologinComponent;
  let fixture: ComponentFixture<CustomerdemologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdemologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdemologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
