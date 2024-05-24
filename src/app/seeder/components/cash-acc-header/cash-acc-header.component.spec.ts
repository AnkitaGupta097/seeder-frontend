import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAccHeaderComponent } from './cash-acc-header.component';

describe('CashAccHeaderComponentComponent', () => {
  let component: CashAccHeaderComponent;
  let fixture: ComponentFixture<CashAccHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashAccHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CashAccHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
