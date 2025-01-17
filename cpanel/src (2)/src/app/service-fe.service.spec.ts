import { TestBed } from '@angular/core/testing';

import { ServiceFEService } from './service-fe.service';

describe('ServiceFEService', () => {
  let service: ServiceFEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
