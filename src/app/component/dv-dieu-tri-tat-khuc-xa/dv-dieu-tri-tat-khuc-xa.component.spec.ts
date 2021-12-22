import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDieuTriTatKhucXaComponent } from './dv-dieu-tri-tat-khuc-xa.component';

describe('DvDieuTriTatKhucXaComponent', () => {
  let component: DvDieuTriTatKhucXaComponent;
  let fixture: ComponentFixture<DvDieuTriTatKhucXaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvDieuTriTatKhucXaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvDieuTriTatKhucXaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
