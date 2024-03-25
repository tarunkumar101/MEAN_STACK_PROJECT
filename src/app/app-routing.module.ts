import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'About', component : AboutusComponent},
  { path : 'Services', component : ServicesComponent},
  { path : 'Pages', component : PagesComponent},
  { path : 'Contact', component : ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
