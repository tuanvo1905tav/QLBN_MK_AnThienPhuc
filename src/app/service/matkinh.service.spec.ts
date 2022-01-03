import { TestBed } from '@angular/core/testing';

import { MatKinhService } from './matkinh.service';

describe('BenhNhanService', () => {
  let service: MatKinhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatKinhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
