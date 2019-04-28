import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CabinetService {

    constructor(private http: HttpClient) {
    }

    getAllComputersInfo(): Observable<any> {
        return this.http.get(`${environment.url}/site`);
    }

    saveComputerInfo(data) {
        return this.http.post(`${environment.url}/site/add_computer`, data);
    }

    getComputersList() {
        return this.http.get(`${environment.url}/site/computers_list`);
    }

    removeComputer(id) {
        return this.http.post(`${environment.url}/site/del_computer`, {id});
    }
}
