import { Component } from '@angular/core';
import { HomeTemplateComponent } from '../../templates/home-template/home-template.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
