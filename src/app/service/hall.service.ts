/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HallService {

    constructor(private http: HttpClient) { }

    allhalls(): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/api/showrooms/index');

    }

    createHall(obj: any): Observable<any> {
        const object = {
            name: 'www',
            district: 'homs',
            address: 'homs-babaAmr',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            total_space: 500,
            longitude: 200.13,
            latitude: 234,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            user_id:2,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            avg_sales: null
        };
        return this.http.post('http://127.0.0.1:8000/api/showrooms', object);
    }
    deleteStore(id: number): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/api/showrooms/delete/' + id);
    }
    editStore(id: number, obj: any) {

        const object = {
            name: 'ssss',
            district: 'alepoo',
            address: 'aleppo453',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            total_space: 300,
            longitude: 200.13,
            latitude: 234,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            user_id:2,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            avg_sales: null
        };
        return this.http.post('http://127.0.0.1:8000/api/showrooms/' + id, object);

    }
}
