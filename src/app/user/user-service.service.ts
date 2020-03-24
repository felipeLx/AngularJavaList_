import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.component';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private usersURL: string; 

  constructor(private http: HttpClient) { 
    this.usersURL = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersURL, user);
  }

  public delete(user: User) {
    return this.http.delete<User>(this.usersURL);
  }
}
