import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  @Input()
  num1: number = 0;
  @Input()
  num2: number = 0;

  rpta: number = 0;
  optionSelected:string ="Addition";


  recibirTecla1(e: any) {
    this.num1 = +e.target.value;
  }

  recibirTecla2(e: any) {
    this.num2 = +e.target.value;
  }


  operar() {
    switch (this.optionSelected) {
      case "Addition":
        this.rpta = this.num1 + this.num2;
        break;
      case "Subtraction":
        this.rpta = this.num1 - this.num2;
        break;
      case "Multiplication":
        this.rpta = this.num1 * this.num2;
        break;
      case "Division":
        this.rpta = this.num1 / this.num2;
        break;
    }
  }

}


