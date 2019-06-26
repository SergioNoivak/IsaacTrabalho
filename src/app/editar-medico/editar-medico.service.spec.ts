import { TestBed } from '@angular/core/testing';

import { EditarMedicoService } from './editar-medico.service';

describe('EditarMedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarMedicoService = TestBed.get(EditarMedicoService);
    expect(service).toBeTruthy();
  });
});
