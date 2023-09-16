import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDatailsComponent } from './loan-datails.component';

describe('LoanDatailsComponent', () => {
  let component: LoanDatailsComponent;
  let fixture: ComponentFixture<LoanDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
