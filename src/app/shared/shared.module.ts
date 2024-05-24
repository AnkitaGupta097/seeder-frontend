import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerDirective } from './directives/gridContainer.directive';
import { GridItemDirective } from './directives/grid-item.directive';
import { HeaderContentComponent } from './components/header-content/header-content.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridContainerDirective,
    GridItemDirective,
    HeaderContentComponent

  ],
  exports: [GridContainerDirective, GridItemDirective, HeaderContentComponent]
})
export class SharedModule { }

