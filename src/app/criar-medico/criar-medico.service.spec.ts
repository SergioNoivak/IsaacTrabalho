import { TestBed } from '@angular/core/testing';

import { CriarMedicoService } from './criar-medico.service';

describe('CriarMedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriarMedicoService = TestBed.get(CriarMedicoService);
    expect(service).toBeTruthy();
  });
});
