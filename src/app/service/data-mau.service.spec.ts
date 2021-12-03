import { TestBed } from '@angular/core/testing';

import { DataMauService } from './data-mau.service';

describe('DataMauService', () => {
  let service: DataMauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
