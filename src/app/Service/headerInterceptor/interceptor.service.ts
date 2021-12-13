import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedReq = req.clone({
      setHeaders: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFyY29zIEZyYW7Dp2EiLCJnbG9ib19pZCI6Ijc2YjlkYWQ1LWY3MTEtNDBjYy1hMmVkLTljYmMxZGFiYzM0YiIsInRpbWVfaWQiOiI2MjgwMDAzIiwidXNlciI6IlN1cnByaXNlIEZyYW5jZSJ9.lfP0jpRPuyxah_T2JPSJUTfYa96K_kEKigkD8nZbcN4",
        "X-GLB-Token": "1336a4cccaab63279447204629d4a7b5a3070447a35316a78753844455f585133444a36504531706d7462694a714d582d54796e6c6274385468463454553579634f50394577633571394c4e4879384c5448704a646236305163724f416d4a46496d3870646b413d3d3a303a6d766672616e636136352e32303136"
      }
    });

    return next.handle(tokenizedReq);
  }
}