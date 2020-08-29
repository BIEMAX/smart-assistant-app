import { Component, OnInit } from '@angular/core';
import { environment, userInterface } from 'src/environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  //#region Global Variables

  /**
   * Define default color on UI (User Interface)
   */
  primalColor: string = userInterface.controlColors;

  //#endregion
  

  ngOnInit(): void {

  }

}