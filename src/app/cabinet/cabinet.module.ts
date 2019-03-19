import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CabinetComponent} from './cabinet.component';
import {CabinetRoutingModule} from './cabinet-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NewComputerComponent } from './new-computer/new-computer.component';
import { MyComputersComponent } from './my-computers/my-computers.component';
import { MenuComponent } from './components/menu/menu.component';
import {SharedModule} from '../shared.module';

@NgModule({
    declarations: [CabinetComponent, HeaderComponent, NewComputerComponent, MyComputersComponent, MenuComponent],
    imports: [
        CommonModule,
        CabinetRoutingModule,
        SharedModule
    ]
})
export class CabinetModule {
}
