import { TestBed } from '@angular/core/testing';

import { TransferfundsService } from './transferfunds.service';

describe('TransferfundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferfundsService = TestBed.get(TransferfundsService);
    expect(service).toBeTruthy();
  });
});
