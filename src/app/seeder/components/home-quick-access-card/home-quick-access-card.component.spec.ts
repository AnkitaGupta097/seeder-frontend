import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuickAccessCardComponent } from './home-quick-access-card.component';

describe('HomeQuickAccessCardComponent', () => {
  let component: HomeQuickAccessCardComponent;
  let fixture: ComponentFixture<HomeQuickAccessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeQuickAccessCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeQuickAccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
