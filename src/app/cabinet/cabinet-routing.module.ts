import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CabinetComponent} from './cabinet.component';
import {MyComputersComponent} from './my-computers/my-computers.component';
import {NewComputerComponent} from './new-computer/new-computer.component';

const routes: Routes = [
    { path: '',  component: CabinetComponent, children: [
        {path: '', redirectTo: 'my-computers', pathMatch: 'full'},
        {path: 'my-computers', component: MyComputersComponent},
        {path: 'new-computer', component: NewComputerComponent, pathMatch: 'full'},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CabinetRoutingModule { }
