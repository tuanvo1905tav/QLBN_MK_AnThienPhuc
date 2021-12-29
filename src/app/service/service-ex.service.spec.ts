import { TestBed } from '@angular/core/testing';

import { ServiceExService } from './service-ex.service';

describe('ServiceExService', () => {
  let service: ServiceExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
