import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.rootUrl}/users`);
  }

  saveUser(user: User) {
    return this.http.post<User>(`${this.rootUrl}/users`, user);
  }

  updateUser(id: number, user: User) {
    return this.http.put<User>(`${this.rootUrl}/users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.rootUrl}/users/${id}`);
  }
}
