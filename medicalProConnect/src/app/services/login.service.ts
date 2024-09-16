import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user.model';
import { DemoUser } from '../models/DemoData/demo-user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://your-api-url.com/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): UserDto {
    let demoUser: DemoUser = new DemoUser();
    let user: UserDto = demoUser.getUser();
    return user;
  }
}
