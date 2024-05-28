import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, NgFor, MatCheckboxModule, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  @Input() dataSource = []

  @Input() displayedColumns: Array<{ def: string, name: string }> = []

  @Input() multiselect = false

  colDefinations: Array<string> = []

  selection = new SelectionModel<any>(true, []);

  @Output() selectionChange = new EventEmitter<any[]>();

  ngOnInit(): void {
    if (this.multiselect) {
      this.displayedColumns = [{ def: "select", name: "Select" }, ...this.displayedColumns]
    }
    this.colDefinations = this.displayedColumns.map((c) => c.def)

    this.selection.changed.subscribe(() => {
      this.selectionChange.emit(this.selection.selected);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  isSelectColumn(col: string) {
    return col == "select"
  }

  onKeyDownRow(event: KeyboardEvent, row: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selection.toggle(row)
    }
  }

}
