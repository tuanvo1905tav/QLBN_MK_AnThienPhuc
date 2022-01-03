import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLMatKinhComponent } from './qlmatkinh.component';

describe('ThemtaikhoanComponent', () => {
  let component: QLMatKinhComponent;
  let fixture: ComponentFixture<QLMatKinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLMatKinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QLMatKinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
