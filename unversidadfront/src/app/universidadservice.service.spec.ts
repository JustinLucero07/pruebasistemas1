import { TestBed } from '@angular/core/testing';

import { UniversidadserviceService } from './universidadservice.service';

describe('UniversidadserviceService', () => {
  let service: UniversidadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversidadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
