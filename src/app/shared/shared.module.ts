import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerDirective } from './directives/gridContainer.directive';
import { GridItemDirective } from './directives/grid-item.directive';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridContainerDirective,
    GridItemDirective,
    HeaderContentComponent,
    TableComponent
  ],
  exports: [GridContainerDirective, GridItemDirective, HeaderContentComponent, TableComponent
  ]
})
export class SharedModule { }

