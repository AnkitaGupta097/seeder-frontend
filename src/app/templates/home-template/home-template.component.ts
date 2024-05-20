import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { GridContainerDirective } from '../../directives/gridContainer.directive';
import { COMPONENT_MAP } from '../../components.map';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { GridItemDirective } from '../../directives/grid-item.directive';

@Component({
  selector: 'app-home-template',
  standalone: true,
  imports: [MatCard, GridContainerDirective, NgComponentOutlet, MatMenuModule, MatButtonModule, GridItemDirective],
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

  ngOnInit(): void {
    this.headerContentNode = COMPONENT_MAP[this.headerContentNode]
    this.summaryCardContentNode = COMPONENT_MAP[this.summaryCardContentNode]
    this.quickAccessCardContentNode = COMPONENT_MAP[this.quickAccessCardContentNode]
    this.mainCardContentNode = COMPONENT_MAP[this.mainCardContentNode]

    // Get the first letter of the name and convert it to uppercase
    this.initials = this.name.charAt(0).toUpperCase();
  }

}
