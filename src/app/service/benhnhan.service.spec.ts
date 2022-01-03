import { TestBed } from '@angular/core/testing';

import { BenhNhanService } from './benhnhan.service';

describe('BenhNhanService', () => {
  let service: BenhNhanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenhNhanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
