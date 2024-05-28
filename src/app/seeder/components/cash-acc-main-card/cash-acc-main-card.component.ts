import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-cash-acc-main-card',
  standalone: true,
  imports: [SharedModule, MatTableModule, MatButtonModule],
  templateUrl: './cash-acc-main-card.component.html',
  styleUrl: './cash-acc-main-card.component.css'
})
export class CashAccMainCardComponent implements OnInit {

  constructor(private contractService: ContractService) {

  }

  dataSource = []
  isLoading = false
  error = null
  cols = [{ def: "name", name: "Name" }, { def: "status", name: "Status" }, { def: "type", name: "Type" }, { def: "perPayment", name: "Per Payment" }, { def: "totalFinanced", name: "Total Financed" }, { def: "totalAmount", name: "Total Amount" }, { name: "Term Length", def: "termLength" }]

  ngOnInit(): void {
    this.isLoading = true;


    this.contractService.contracts.subscribe((contracts) => {
      if (contracts?.length) {
        this.dataSource = contracts
        this.isLoading = false
      } else {
        this.contractService.getContracts().subscribe(() => { this.isLoading = false })
      }
    })
  }

}
