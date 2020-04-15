import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cliffton';
  inputa=0;
  inputb=0;
  hasil=0;
  output=[];
  outputPola(input, a, b){
    this.output = [];
    let max =0;
    let min=0;
    if(a>b){
      max=a;
      min = b;
    }
    else{
      max=b;
      min=a;
    }
    if(input % 2 == 0){
      //genap
      for(let i =max;i<=input;i++){
        let str="";
        for(let j=0;j<i;j++){
          str+="*";
        }
        this.output.push(str);
      }
    }
    else{
      //ganjil
      let counta=max;
      let countb=1;
      for(let i =0;i<max;i++){
        let str="";
        for(let j=0;j<counta;j++){
          str+="*";
        }
        if(countb<=min){
          for(let k=0;k<countb;k++){
            str+="o";
          }
        }
        counta--;
        countb++;
        this.output.push(str);
      }
    }
  }
  Hitung(a,b){
    this.inputa = parseInt(a);
    this.inputb = parseInt(b);
    this.hasil = Math.pow(this.inputa,this.inputb);
    this.outputPola(this.hasil, this.inputa, this.inputb);
  }
}
