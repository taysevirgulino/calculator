import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    subtitle: string;
    display: string;

    constructor() {
        this.title = "Trabalho da 3ª aula de LPWEB";
        this.subtitle = "Calculadora";
        this.display = "";
    }

    ngOnInit(): void {
    }

    number(num: number){
      this.display += num;
    }

    key(op: string){
      let operadores = ['+', '-', '*', '/'];
      var equacao = this.display;

      if(op == "="){
        if(equacao)
          this.display = eval(equacao);
        return;
      }

      if(operadores.indexOf(this.display[this.display.length - 1]) > -1)
        return;

      this.display += op;
    }

    clear(){
      this.display = "";
    }

}
