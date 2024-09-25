// registration.model.ts
export class Registration {
  userType: string = ''; // Patient or Doctor
  firstName: string = '';
  lastName: string = '';
  dateOfBirth!: string;
  address!: string;
  contact!: number;
  emergencyContact!: number;
  company!: string;
  doctorRegistrationNumber!: number;
  address1!: string;
  address2!: string;
  address3!: string;
  contact1!: number;
  contact2!: number;
  contact3!: number;
}
