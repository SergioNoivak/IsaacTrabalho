import { TestBed } from '@angular/core/testing';

import { ConsultarVeiculoService } from './consultar-veiculo.service';

describe('ConsultarVeiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultarVeiculoService = TestBed.get(ConsultarVeiculoService);
    expect(service).toBeTruthy();
  });
});
