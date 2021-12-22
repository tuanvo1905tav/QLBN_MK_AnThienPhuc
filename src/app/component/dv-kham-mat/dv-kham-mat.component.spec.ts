import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvKhamMatComponent } from './dv-kham-mat.component';

describe('DvKhamMatComponent', () => {
  let component: DvKhamMatComponent;
  let fixture: ComponentFixture<DvKhamMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvKhamMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvKhamMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
