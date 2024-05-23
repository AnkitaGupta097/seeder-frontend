import { Component } from '@angular/core';
import { getGreeting } from '../../helper';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';


@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [CommonModule, SharedModule],
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

  getFormattedDate(): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(this.currentDate);
  }

}
