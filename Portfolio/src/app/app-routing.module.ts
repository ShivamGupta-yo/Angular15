import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'Home', component:HomeComponent
  },
  {
    path:'About', component:AboutComponent
  },
  {
    path:'Projects', component:ProjectsComponent
  },
  {
    path:'Contact', component:ContactComponent
  },
  {
    path:'Login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
