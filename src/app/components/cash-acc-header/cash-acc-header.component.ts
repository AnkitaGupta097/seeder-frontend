import { Component } from '@angular/core';
import { GridContainerDirective } from '../../directives/gridContainer.directive';

@Component({
  selector: 'app-cash-acc-header',
  standalone: true,
  imports: [GridContainerDirective],
  templateUrl: './cash-acc-header.component.html',
  styleUrl: './cash-acc-header.component.css'
})
export class CashAccHeaderComponent {

}
