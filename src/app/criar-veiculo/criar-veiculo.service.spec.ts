import { TestBed } from '@angular/core/testing';

import { CriarVeiculoService } from './criar-veiculo.service';

describe('CriarVeiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriarVeiculoService = TestBed.get(CriarVeiculoService);
    expect(service).toBeTruthy();
  });
});
