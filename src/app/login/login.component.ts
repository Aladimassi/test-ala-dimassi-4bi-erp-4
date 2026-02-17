import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginM={
    email: '',
    password: ''
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl(this.loginM.email, [Validators.required, Validators.email]),
      password: new FormControl(this.loginM.password, [Validators.required, Validators.minLength(2)])
    })
  }

  get email(){ return this.loginForm.get('email')}
  get password(){ return this.loginForm.get('password')}

  onSubmit(){
    console.log(this.loginForm.value)
  }
}
