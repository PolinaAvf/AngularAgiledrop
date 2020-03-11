import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
    { path: 'companies', component: CompanyListComponent },
    { path: 'companies/:id', component: CompanyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
