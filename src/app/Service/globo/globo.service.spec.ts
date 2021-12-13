import { TestBed } from '@angular/core/testing';

import { GloboService } from './globo.service';

describe('GloboService', () => {
  let service: GloboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GloboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
