import {Component, OnInit} from '@angular/core';
import {CabinetService} from '../cabinet.service';
import {Observable} from 'rxjs';
import {IComputersInfo} from '../../app.interfaces';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-new-computer',
    templateUrl: './new-computer.component.html',
    styleUrls: ['./new-computer.component.scss']
})
export class NewComputerComponent implements OnInit {

    computersInfo: Observable<IComputersInfo>;
    form: FormGroup = new FormGroup({
        name: new FormControl(''),
        screen: new FormControl(''),
        hardwareConcurrency: new FormControl(''),
        memory: new FormControl(''),
        webgl: new FormControl(''),
        languages: new FormControl(''),
        browser: new FormControl(''),
        os: new FormControl(''),
        proxy_protocol: new FormControl(''),
        proxy_address: new FormControl(''),
        proxy_port: new FormControl(''),
        proxy_login: new FormControl(''),
        proxy_password: new FormControl(''),
    });

    constructor(private cabinetService: CabinetService) {
        this.computersInfo = this.cabinetService.getAllComputersInfo();
    }

    ngOnInit() {
    }

    submit() {
        this.cabinetService.saveComputerInfo(this.form.value).subscribe(res => console.log(res));
    }

}
