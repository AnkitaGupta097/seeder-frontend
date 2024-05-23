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
  displayedColumns = ["name", "status", "type", "perPayment", "totalFinanced", "totalAmount", "termLength"]

  ngOnInit(): void {
    this.isLoading = true;
    this.contractService.getContracts().subscribe({
      next: (contracts) => {
        this.dataSource = contracts
      },
      error: (errorMessage) => (this.error = errorMessage)
    })
  }

}
