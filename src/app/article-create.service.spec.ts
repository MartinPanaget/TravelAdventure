import { TestBed } from '@angular/core/testing';

import { ArticleCreateService } from './article-create.service';

describe('ArticleCreateService', () => {
  let service: ArticleCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
