import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { COMPONENT_MAP } from '../../components.map';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../shared/services/http/auth.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-home-template',
  standalone: true,
  imports: [MatCard, NgComponentOutlet, MatMenuModule, MatButtonModule, SharedModule],
  templateUrl: './home-template.component.html',
  styleUrl: './home-template.component.css'
})
export class HomeTemplateComponent implements OnInit {
  @Input() headerContentNode: any;
  @Input() summaryCardContentNode: any;
  @Input() quickAccessCardContentNode: any;
  @Input() mainCardContentNode: any;

  name: string = "Ankita"
  initials: string = "";

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.headerContentNode = COMPONENT_MAP[this.headerContentNode]
    this.summaryCardContentNode = COMPONENT_MAP[this.summaryCardContentNode]
    this.quickAccessCardContentNode = COMPONENT_MAP[this.quickAccessCardContentNode]
    this.mainCardContentNode = COMPONENT_MAP[this.mainCardContentNode]

    // Get the first letter of the name and convert it to uppercase
    this.initials = this.name.charAt(0).toUpperCase();
  }


  onLogout() {
    this.auth.logout()
  }
}
