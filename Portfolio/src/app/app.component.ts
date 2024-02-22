import { Component } from '@angular/core';
import { Employee } from './employee';
import { Account } from './account';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1> First Component </h1>',
  styleUrls: ['./app.component.css'],
  viewProviders:[Employee, Account,FormsModule]
})
export class AppComponent {
  title = 'Portfolio';
  name:string="Shivam";
  col:number=2;
  fname:string="INDIA";
//   constructor(private ob: Employee, private obj: Account){
// ob.show(10,20)
//   }
data:string="Rock"
propertyName:string="John"
onClick(){
  alert('subscribed')
}

isValid:boolean=true;

changeValue(valid=false){
  this.isValid= valid;
}


  

students:any[]=[
  {
    'name': 'Shivam'
  },
  {
    'name': 'Palak'
  },
  {
    'name': 'Jatin'
  },
  {
    'name': 'Ankit'
  },
  {
    'name': 'Palak Bharti'
  },
]
display:boolean=true;
nameofactor:string="salman";
today= new Date;
n:number = 3.14159265359
dollar:number=150000000000
}

