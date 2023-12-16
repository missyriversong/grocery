import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})

export class GroceryComponent {
  items: any[] = [];
  item!: string;
  
  onClick(){
    this.items.push({name: this.item});
  	this.item = '';
  }
}

//didnt work:

//https://www.explainprogramming.com/typescript/never-type/#:~:text=never%20marks%20a%20value%20which,finally%20assign%20values%20to%20it!
// items: Array<String>;

//https://stackoverflow.com/questions/42566084/how-to-declare-a-variable-as-list-of-string-array-in-typescript
//  items: string[][]
  

