import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlibackendComponent } from './quanlibackend.component';

describe('QuanlibackendComponent', () => {
  let component: QuanlibackendComponent;
  let fixture: ComponentFixture<QuanlibackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlibackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlibackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
