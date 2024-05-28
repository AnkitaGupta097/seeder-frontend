import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAccMainCardComponent } from './cash-acc-main-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CashAccMainCardComponent', () => {
  let component: CashAccMainCardComponent;
  let fixture: ComponentFixture<CashAccMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashAccMainCardComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashAccMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
