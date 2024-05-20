import { Component } from '@angular/core';
import { GridContainerDirective } from '../../directives/gridContainer.directive';
import { getGreeting } from '../../helper';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [GridContainerDirective, CommonModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  currentDate: Date = new Date();
  greetingText: string = ""

  ngOnInit(): void {

    const text = getGreeting(this.currentDate)
    this.greetingText = `${text} !`
  }

}
