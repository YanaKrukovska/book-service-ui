import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ID_KEY = 'auth-user-id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() {
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveUserId(id: number): void {
    window.sessionStorage.removeItem(USER_ID_KEY);
    window.sessionStorage.setItem(USER_ID_KEY, String(id));
  }

  public getUserId(): string {
    return window.sessionStorage.getItem(USER_ID_KEY);
  }
}
