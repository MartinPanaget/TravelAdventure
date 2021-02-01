import { TestBed } from '@angular/core/testing';

import { BlogOverviewService } from './blog-overview.service';

describe('BlogOverviewService', () => {
  let service: BlogOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
