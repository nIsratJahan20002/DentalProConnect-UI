import { UserDto } from '../user.model';

export class DemoUser {
  user1 = new UserDto();
  constructor() {
    this.user1.firstName = 'John';
    this.user1.lastName = 'doe';
    this.user1.dateOfBirth = '31/2/2002';
   this.user1.address='dhaka1';
  this.user1.contact=+88012334224;
this.user1.emergencyContact=+880989887;
 this.user1.company='city';
  this.user1.doctorRegistrationNumber=+8802458;
 this.user1.address='bashaboo';
  this.user1.address='noakhali';
  this.user1.address='comilla';
 this.user1.contact=+8801238544;
 this.user1.contact=+8813475;
 this.user1.contact=+880122578;
  }
  getUser() {
    return this.user1;
  }
}
