import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFaundComponent} from './not-faund/not-faund.component';

const routes: Routes = [
  { path: '',  loadChildren: './auth/auth.module#AuthModule'},
  { path: 'cabinet',  loadChildren: './cabinet/cabinet.module#CabinetModule'},
  { path: '**',  component: NotFaundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
