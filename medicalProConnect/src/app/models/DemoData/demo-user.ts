import { UserDto } from '../user.model';

export class DemoUser {
  user1 = new UserDto();
  constructor() {
    this.user1.id = 1;
    this.user1.name = 'John Doe';
    this.user1.email = 'john.doe@example.com';
    this.user1.token = 'test token';
  }

  getUser() {
    return this.user1;
  }
}
