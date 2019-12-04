import { TestBed } from '@angular/core/testing';

import { MetacrawlService } from './metacrawl.service';

describe('MetacrawlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetacrawlService = TestBed.get(MetacrawlService);
    expect(service).toBeTruthy();
  });
});
