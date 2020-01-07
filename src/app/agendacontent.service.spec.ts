import { TestBed } from '@angular/core/testing';

import { AgendacontentService } from './agendacontent.service';

describe('AgendacontentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendacontentService = TestBed.get(AgendacontentService);
    expect(service).toBeTruthy();
  });
});
