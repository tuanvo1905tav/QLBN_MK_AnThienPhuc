import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSPComponent } from './show-sp.component';

describe('ShowSPComponent', () => {
  let component: ShowSPComponent;
  let fixture: ComponentFixture<ShowSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
