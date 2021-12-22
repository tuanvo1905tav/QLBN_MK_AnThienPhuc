import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvPhauThuatKhucXaComponent } from './dv-phau-thuat-khuc-xa.component';

describe('DvPhauThuatKhucXaComponent', () => {
  let component: DvPhauThuatKhucXaComponent;
  let fixture: ComponentFixture<DvPhauThuatKhucXaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvPhauThuatKhucXaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvPhauThuatKhucXaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
