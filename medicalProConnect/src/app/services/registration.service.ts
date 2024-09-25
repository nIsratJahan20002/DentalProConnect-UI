// registration.service.ts
import { Injectable } from '@angular/core';
import { Registration } from '../models/registration.model';
import { UserDto } from '../models/user.model';
import { DemoUser } from '../models/DemoData/demo-user';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  registerUser(registration: Registration): UserDto {
    let demoUser: DemoUser = new DemoUser();
    let user: UserDto;

    // Differentiating between Patient and Doctor for demo data
    if (registration.userType === 'Patient') {
      user = this.getPatientDemoData();
    } else if (registration.userType === 'Doctor') {
      user = this.getDoctorDemoData();
    } else {
      throw new Error('Invalid user type');
    }

    console.log('Registration Data:', registration);
    console.log('Registered User:', user);

    return user;
  }

  private getPatientDemoData(): UserDto {
    let demoUser = new DemoUser();
    demoUser.user1.name = 'Patient John Doe';
    demoUser.user1.email = 'patient.john.doe@example.com';
    return demoUser.getUser();
  }

  private getDoctorDemoData(): UserDto {
    let demoUser = new DemoUser();
    demoUser.user1.name = 'Dr. John Doe';
    demoUser.user1.email = 'dr.john.doe@example.com';
    return demoUser.getUser();
  }
}
