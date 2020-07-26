import { TestBed } from '@angular/core/testing';

import { ServicescoronaService } from './servicescorona.service';

describe('ServicescoronaService', () => {
  let service: ServicescoronaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicescoronaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
