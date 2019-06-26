import { TestBed } from '@angular/core/testing';

import { ConsultarMedicoService } from './consultar-medico.service';

describe('ConsultarMedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultarMedicoService = TestBed.get(ConsultarMedicoService);
    expect(service).toBeTruthy();
  });
});
