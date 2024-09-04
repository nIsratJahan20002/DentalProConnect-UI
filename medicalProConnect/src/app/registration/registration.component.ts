import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from './registration.model';
// import { Registration } from './registration.model.ts';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  isPatient: boolean = false;
  isDoctor: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      userType: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [''],
      address: [''],
      contact: [''],
      emergencyContact: [''],
      company: [''],
      doctorRegistrationNumber: [''],
      address1: [''],
      address2: [''],
      address3: [''],
      contact1: [''],
      contact2: [''],
      contact3: ['']
    });
  }

  onUserTypeChange(userType: string) {
    this.isPatient = userType === 'Patient';
    this.isDoctor = userType === 'Doctor';
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const registrationData: Registration = this.registrationForm.value;
      console.log('Registration Data:', registrationData);
    }
  }
}
