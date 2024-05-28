import { Component } from '@angular/core';
import { HomeTemplateComponent } from '../../templates/home-template/home-template.component';
import { getGreeting } from '../../helper';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentDate: Date = new Date();
  heading: string = ""
  subheading: string = ""
  totalAvailableAdvance = 0

  constructor(private contractService: ContractService) {

  }

  ngOnInit(): void {

    const text = getGreeting(this.currentDate)
    this.heading = `${text} !`
    this.subheading = this.getFormattedDate()


    this.contractService.contracts.subscribe((contracts) => {
      if (contracts?.length) {
        this.totalAvailableAdvance = contracts?.filter((con: any) => con.status == "AVAILABLE")?.reduce((accumulator: number, contract: any) => {
          return accumulator += contract.totalAmount;
        }, 0)
      } else {
        this.contractService.getContracts().subscribe(() => { })
      }
    })

  }

  getFormattedDate(): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(this.currentDate);
  }

}
