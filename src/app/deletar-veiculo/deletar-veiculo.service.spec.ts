import { TestBed } from '@angular/core/testing';

import { DeletarVeiculoService } from './deletar-veiculo.service';

describe('DeletarVeiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletarVeiculoService = TestBed.get(DeletarVeiculoService);
    expect(service).toBeTruthy();
  });
});
