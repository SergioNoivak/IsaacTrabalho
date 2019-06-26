import { TestBed } from '@angular/core/testing';

import { DeletarMedicoService } from './deletar-medico.service';

describe('DeletarMedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletarMedicoService = TestBed.get(DeletarMedicoService);
    expect(service).toBeTruthy();
  });
});
