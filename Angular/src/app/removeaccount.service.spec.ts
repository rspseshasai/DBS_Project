import { TestBed } from '@angular/core/testing';

import { RemoveaccountService } from './removeaccount.service';

describe('RemoveaccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveaccountService = TestBed.get(RemoveaccountService);
    expect(service).toBeTruthy();
  });
});
