import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtMatKinhComponent } from './ct-mat-kinh.component';

describe('CtMatKinhComponent', () => {
  let component: CtMatKinhComponent;
  let fixture: ComponentFixture<CtMatKinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtMatKinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtMatKinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
