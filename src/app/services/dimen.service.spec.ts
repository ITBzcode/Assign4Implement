import { TestBed, inject } from '@angular/core/testing';

import { DimenService } from './dimen.service';

describe('DimenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DimenService]
    });
  });

  it('should be created', inject([DimenService], (service: DimenService) => {
    expect(service).toBeTruthy();
  }));
});
