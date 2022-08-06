import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {  }
  allusers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/index');

}

createUser(obj: any): Observable<any> {
    const object = {
        'name':'',
        'email' :'www@gmail0com',
        'password' : '123456',
        'address' : 'homs-123',
        'phone' :'0936824841',
        'image' :'file' ,
    };
    return this.http.post('http://127.0.0.1:8000/api/users',object);
}
deleteUser(id: number): Observable<any> {
return this.http.get('http://127.0.0.1:8000/api/users/delete/' + id);
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
editUser(id: number, obj: any) {

const object = {
    name:'',
        email :'www@gmail0com',
        password : '123456',
        address : 'homs-123',
        phone :'0936824841',
        image :'file' ,
};
return this.http.post('http://127.0.0.1:8000/api/users/' + id, object);

}
}
