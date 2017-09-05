import { TestBed, inject } from '@angular/core/testing';

import { QuestnService } from './questn.service';

describe('QuestnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestnService]
    });
  });

  it('should be created', inject([QuestnService], (service: QuestnService) => {
    expect(service).toBeTruthy();
  }));
});
