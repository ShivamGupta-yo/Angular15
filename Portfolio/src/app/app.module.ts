import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BooksComponent } from './books/books.component';
import { Employee } from './employee';
import { Account } from './account';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Account,Employee ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private obj: Account,private ob: Employee) {
    ob.show(10,30);
}
}
