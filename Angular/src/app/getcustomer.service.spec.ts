import { TestBed } from '@angular/core/testing';

import { GetcustomerService } from './getcustomer.service';

describe('GetcustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetcustomerService = TestBed.get(GetcustomerService);
    expect(service).toBeTruthy();
  });
});
