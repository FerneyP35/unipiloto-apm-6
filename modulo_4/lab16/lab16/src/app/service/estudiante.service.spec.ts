import { TestBed, inject } from '@angular/core/testing';

import { EstudianteService } from './estudiante.service';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudianteService]
    });
  });

  it('should be created', inject([EstudianteService], (service: EstudianteService) => {
    expect(service).toBeTruthy();
  }));
});
