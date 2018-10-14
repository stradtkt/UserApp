import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly base = 'https://randomuser.me/api/?results=25';
  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.base);
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.base + '&' + id);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.base, user);
  }
  removeUser(id: number): Observable<User> {
    return this.http.delete<User>(this.base + '&' + id);
  }
}
