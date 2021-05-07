import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

const AUTH_API = 'http://localhost:8041/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminAuthenticationActivity = new Subject<any>();
  private userAuthenticationActivity = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  setLoggedIn(isLoggedIn: boolean): void {
    this.userAuthenticationActivity.next(isLoggedIn);
  }

  getLoggedIn(): Observable<any> {
    return this.userAuthenticationActivity.asObservable();
  }

  setAdminLoggedIn(isLoggedIn: boolean): void {
    this.adminAuthenticationActivity.next(isLoggedIn);
  }

  getAdminLoggedIn(): Observable<any> {
    return this.adminAuthenticationActivity.asObservable();
  }
}
