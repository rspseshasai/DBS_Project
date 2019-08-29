import { TestBed } from '@angular/core/testing';

import { ReportedtransService } from './reportedtrans.service';

describe('ReportedtransService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportedtransService = TestBed.get(ReportedtransService);
    expect(service).toBeTruthy();
  });
});
