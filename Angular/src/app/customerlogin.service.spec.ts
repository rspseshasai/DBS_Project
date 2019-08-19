import { TestBed } from '@angular/core/testing';

import { CustomerloginService } from './customerlogin.service';

describe('CustomerloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerloginService = TestBed.get(CustomerloginService);
    expect(service).toBeTruthy();
  });
});
