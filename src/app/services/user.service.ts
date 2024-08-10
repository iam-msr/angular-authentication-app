import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getOrganizations(): Observable<any[]> {
    return this.http.get<any[]>('api/organizations');
  }

  // Method to check if a user exists by email or phone number
  checkUser(emailOrPhone: string): Observable<boolean> {
    return this.http.get<any[]>(`/api/users`).pipe(
      map(users => users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone))
    );
  }

  // Method to get a user_name by email or phone number
  getUserByEmailOrPhone(emailOrPhone: string): Observable<{ name: string; email: string } | null> {
    return this.http.get<any[]>(`/api/users`).pipe(
      map(users => {
        const user = users.find(user => user.email === emailOrPhone || user.phone === emailOrPhone);
        return {
          name:user.name,
          email:user.email
        };
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>('api/users').pipe(
      map(users => users.find(user => user.email === email && user.password === password))
    );
  }

  signup(user: any): Observable<any> {
    return this.http.post<any>('api/users', user);
  }
}
