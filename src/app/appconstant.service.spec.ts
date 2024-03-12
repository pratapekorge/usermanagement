import { TestBed } from '@angular/core/testing';

import { AppconstantService } from './appconstant.service';

describe('AppconstantService', () => {
  let service: AppconstantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppconstantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
