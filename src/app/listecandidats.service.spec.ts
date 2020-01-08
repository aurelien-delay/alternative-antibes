import { TestBed } from '@angular/core/testing';

import { ListecandidatsService } from './listecandidats.service';

describe('ListecandidatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListecandidatsService = TestBed.get(ListecandidatsService);
    expect(service).toBeTruthy();
  });
});
