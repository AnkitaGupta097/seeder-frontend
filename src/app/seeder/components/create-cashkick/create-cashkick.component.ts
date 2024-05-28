import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MatCard } from '@angular/material/card';
import { NgComponentOutlet, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-create-cashkick',
  standalone: true,
  imports: [SharedModule, MatCard, NgComponentOutlet, MatButtonModule, MatIconModule],
  templateUrl: './create-cashkick.component.html',
  styleUrl: './create-cashkick.component.css'
})
export class CreateCashkickComponent implements OnInit {

  headerNode = HeaderComponent
  headerContent = { heading: "New cash kick", subheading: "Let’s setup a new cash kick to power your Saas" }
  isLoading = false
  canGoBack: boolean = true
  colmsDisplayed = [{ def: "name", name: "Name" }, { def: "status", name: "Status" }, { def: "type", name: "Type" }, { def: "perPayment", name: "Per Payment" }, { def: "totalFinanced", name: "Total Financed" }, { def: "totalAmount", name: "Total Amount" }, { name: "Term Length", def: "termLength" }]
  isReview = false
  contractsSelected = []
  contractsDisplayed = []

  constructor(private _location: Location, private router: Router, private contractService: ContractService, private route: ActivatedRoute) {
    this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);
    this.isReview = route.snapshot.paramMap.get("action") != "new"
  }


  ngOnInit(): void {
    this.contractService.getContracts({ status: "AVAILABLE" }).subscribe({
      next: (contracts) => {
        this.isLoading = false
        this.contractsDisplayed = contracts
      },
      error: (err) => {
        this.isLoading = false
        throw err
      }
    })

    this.route.params.subscribe((params) => {
      const action = params?.['action']

      if (action == "review") {

        if (!this.contractsSelected?.length) {
          this.router.navigate(["../new"], { relativeTo: this.route })
        } else {
          this.isReview = true

        }
      } else if (action == "new") {
        this.isReview = false

      } else {
        this.router.navigate(["../new"], { relativeTo: this.route })
      }

    });
  }

  onChangeSelection = (selectedContracts: any) => {
    this.contractsSelected = selectedContracts
  }



  onBackClick = () => {
    console.log("--here")
    if (this.canGoBack) {

      this._location.back()
    } else {
      console.log("hello")
      this.router.navigate(['']);
    }
  }
}
