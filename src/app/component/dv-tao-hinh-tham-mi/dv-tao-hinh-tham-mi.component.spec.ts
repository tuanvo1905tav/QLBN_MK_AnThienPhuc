import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvTaoHinhThamMiComponent } from './dv-tao-hinh-tham-mi.component';

describe('DvTaoHinhThamMiComponent', () => {
  let component: DvTaoHinhThamMiComponent;
  let fixture: ComponentFixture<DvTaoHinhThamMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvTaoHinhThamMiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvTaoHinhThamMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
