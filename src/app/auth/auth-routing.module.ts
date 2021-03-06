import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';

const routes: Routes = [
    { path: '',  component: AuthComponent, children: [
        { path: '',  redirectTo: '/login', pathMatch: 'full'},
        { path: 'login',  component: LoginComponent, pathMatch: 'full'},
        { path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
