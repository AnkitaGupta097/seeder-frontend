import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainCardComponent } from './home-main-card.component';

describe('HomeMainCardComponent', () => {
  let component: HomeMainCardComponent;
  let fixture: ComponentFixture<HomeMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMainCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
