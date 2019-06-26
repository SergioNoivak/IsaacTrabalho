import { TestBed } from '@angular/core/testing';

import { EditarVeiculoService } from './editar-veiculo.service';

describe('EditarVeiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarVeiculoService = TestBed.get(EditarVeiculoService);
    expect(service).toBeTruthy();
  });
});
