import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BooksComponent } from './books/books.component';
import { Employee } from './employee';
import { Account } from './account';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BooksComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    LoginComponent
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
