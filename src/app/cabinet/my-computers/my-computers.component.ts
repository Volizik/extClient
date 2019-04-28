import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CabinetService} from '../cabinet.service';

@Component({
    selector: 'app-my-computers',
    templateUrl: './my-computers.component.html',
    styleUrls: ['./my-computers.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class MyComputersComponent implements OnInit {

    displayedColumns: string[] = ['name', 'browser', 'screen', 'os', 'delete'];
    computersList;

    constructor(public cabinetService: CabinetService) {
        this.getComputers();
    }

    ngOnInit() {
    }

    getComputers() {
        this.cabinetService.getComputersList().subscribe(data => {
            this.computersList = data;
            console.log(this.computersList);
        });
    }

    removeComputer(id) {
        this.cabinetService.removeComputer(id).subscribe(() => {
            this.getComputers();
        });
    }

}
