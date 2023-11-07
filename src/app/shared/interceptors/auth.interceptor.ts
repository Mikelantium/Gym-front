import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassService } from '../services/class.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private api: ClassService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.api.getToken()
    request = request.clone({
      setHeaders:{
        Authorization: 'Bearer ' + token
      }
    })
    return next.handle(request);
  }
}
