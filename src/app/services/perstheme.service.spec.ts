import { TestBed, inject } from '@angular/core/testing';

import { PersthemeService } from './perstheme.service';

describe('PersthemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersthemeService]
    });
  });

  it('should be created', inject([PersthemeService], (service: PersthemeService) => {
    expect(service).toBeTruthy();
  }));
});
