import { TestBed } from '@angular/core/testing';

import { AuditoriumService } from './auditorium.service';

describe('AuditoriumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditoriumService = TestBed.get(AuditoriumService);
    expect(service).toBeTruthy();
  });
});
