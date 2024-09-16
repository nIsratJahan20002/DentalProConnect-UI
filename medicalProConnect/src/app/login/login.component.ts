import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ButtonType } from '../enums/buttonEnums'
import { LoginService } from '../services/login.service'
import { UserDto } from '../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService) {  }

  
  emailText = ''
  passwordText = ''
  passwordInputType = 'password'
  submitted = false
  buttonType = ButtonType.SUBMIT
  test = ''
  userDto: UserDto | null = null;

  onEmailChange(email: string) {
    this.emailText = email
    this.submitted = false
  }

  onPasswordChange(password: string) {
    this.passwordText = password
    this.submitted = false
  }
  Submit() {
    this.submitted = true
    this.userDto =  this.loginService.login(this.emailText, this.passwordText)

  }
  showPassword(showPassword: boolean) {
    if (showPassword) {
      this.passwordInputType = 'text'
    } else {
      this.passwordInputType = 'password'
    }
  }
}
