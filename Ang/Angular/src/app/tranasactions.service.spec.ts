import { TestBed } from '@angular/core/testing';

import { TranasactionsService } from './tranasactions.service';

describe('TranasactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranasactionsService = TestBed.get(TranasactionsService);
    expect(service).toBeTruthy();
  });
});
