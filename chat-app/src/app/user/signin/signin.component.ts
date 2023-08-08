import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  constructor(public fb:FormBuilder,
    public userService: UserService)
  {}
   signinForm!:FormGroup;

  ngOnInit(): void {
     this.signinForm =  this.fb.group ({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  


  onSubmit(){
    this.userService?.login(this.signinForm?.value).subscribe(res=>{
      console.log("Login response: ",res)
    })
  }
}
