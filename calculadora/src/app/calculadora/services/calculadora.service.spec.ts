import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalculadoraService
      ]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 1 + 4 = 5', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('Deve garantir que 1 - 4 = -3', () => {
    const subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('Deve garantir que 1 / 4 = 0.25', () => {
    const divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  });

  it('Deve garantir que 1 * 4 = 4', () => {
    const multiplicar = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(multiplicar).toEqual(4);
  });

  it('Deve retornar 0 para operação inválida', () => {
    const invalida = service.calcular(1, 4, '%');
    expect(invalida).toEqual(0);
  });
});
