import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatkinhComponent } from './matkinh.component';

describe('MatkinhComponent', () => {
  let component: MatkinhComponent;
  let fixture: ComponentFixture<MatkinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatkinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatkinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
