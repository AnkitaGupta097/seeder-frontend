import { Component, Input } from '@angular/core';
import { GridContainerDirective } from '../../directives/gridContainer.directive';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [GridContainerDirective],
  templateUrl: './header-content.component.html',
})
export class HeaderContentComponent {
  @Input() header = ""
  @Input() subheader = ""
}
