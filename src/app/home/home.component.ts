import { Component, OnInit } from '@angular/core';
import { userInterface, environment } from 'src/environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  /**
   * Define default color on UI (User Interface)
   */
  primalColor: string = userInterface.controlColors;
  customerName: string;
  productVersion: string;

  ngOnInit() {
    this.getCustomerInformation();
  }

  /**
   * Get the customer information from API.
   */
  getCustomerInformation() {
    this.customerName = 'Beilke Industries';
    this.productVersion = 'Beta 1';
  }

}
