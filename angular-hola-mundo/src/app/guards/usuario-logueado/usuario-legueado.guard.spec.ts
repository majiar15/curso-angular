import { TestBed } from '@angular/core/testing';

import { UsuarioLegueadoGuard } from './usuario-legueado.guard';

describe('UsuarioLegueadoGuard', () => {
  let guard: UsuarioLegueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioLegueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
