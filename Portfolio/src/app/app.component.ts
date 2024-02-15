import { Component } from '@angular/core';
import { Employee } from './employee';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1> First Component </h1>',
  styleUrls: ['./app.component.css'],
  // viewProviders:[Employee, Account]
})
export class AppComponent {
  title = 'Portfolio';
//   constructor(private ob: Employee, private obj: Account){
// ob.show(10,20)
//   }
  
}

