import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-quick-access-card',
  standalone: true,
  imports: [SharedModule, MatButtonModule],
  templateUrl: './home-quick-access-card.component.html',
  styleUrl: './home-quick-access-card.component.css'
})
export class HomeQuickAccessCardComponent {

  constructor(private router: Router) {

  }

  @Input() totalCashAdvance = 0
  onLaunchNewCashkickClick = () => {
    this.router.navigate(["/cashkick/new"])
  }
}
