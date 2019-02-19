import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected baseUrl = 'http://5c505db9ee97f600140480dd.mockapi.io';
  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/auth`, { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem('currentUser'));
  }
}
