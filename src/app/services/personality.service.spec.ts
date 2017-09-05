import { TestBed, inject } from '@angular/core/testing';

import { PersonalityService } from './personality.service';

describe('PersonalityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalityService]
    });
  });

  it('should be created', inject([PersonalityService], (service: PersonalityService) => {
    expect(service).toBeTruthy();
  }));
});
