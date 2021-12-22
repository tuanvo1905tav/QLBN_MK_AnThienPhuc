import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvPhauThuatGlaucomaComponent } from './dv-phau-thuat-glaucoma.component';

describe('DvPhauThuatGlaucomaComponent', () => {
  let component: DvPhauThuatGlaucomaComponent;
  let fixture: ComponentFixture<DvPhauThuatGlaucomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvPhauThuatGlaucomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvPhauThuatGlaucomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
