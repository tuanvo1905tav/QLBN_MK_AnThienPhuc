import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatLichKhamComponent } from './dat-lich-kham.component';

describe('DatLichKhamComponent', () => {
  let component: DatLichKhamComponent;
  let fixture: ComponentFixture<DatLichKhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatLichKhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatLichKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
