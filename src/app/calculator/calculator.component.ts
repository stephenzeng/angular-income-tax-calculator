import { Component, OnInit } from '@angular/core';
import { IncomeInfo } from '../income-info';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {

  model = new IncomeInfo();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit', this.model);
  }

}
