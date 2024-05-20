import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAcclerationComponent } from './cash-accleration.component';

describe('CashAcclerationComponent', () => {
  let component: CashAcclerationComponent;
  let fixture: ComponentFixture<CashAcclerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashAcclerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashAcclerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
