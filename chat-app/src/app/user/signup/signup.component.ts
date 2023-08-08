import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userService: UserService =inject(UserService);
  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  }) 

  onSubmit(){
    this.userService?.register(this.signupForm.value)
  }

}
