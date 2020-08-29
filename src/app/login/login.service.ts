// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment'
// import { HttpHeaders, HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//     private readonly apiKey = `${environment.apiKey}`;
//     private readonly apiEndPoint = `${environment.apiUrl}painel`;

//     private httpOptions = {
//         headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'Authorization': this.apiKey,
//         'X-Portinari-No-Error': 'true'
//         })
//     };

//     constructor(private http: HttpClient) { }

//     login(login, password) {
//         let data = {
//             userLogin: login,
//             userPassword: password
//         };
//         return this.http.post(this.apiEndPoint + '/contrato', data, this.httpOptions);
//     }

// }