import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAccSummaryCardComponent } from './cash-acc-summary-card.component';

describe('CashAccSummaryCardComponent', () => {
  let component: CashAccSummaryCardComponent;
  let fixture: ComponentFixture<CashAccSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashAccSummaryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashAccSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
