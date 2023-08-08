import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enums } from '../enums';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  register(userData:{}){
    this.http.post(Enums.Environment.uri +"/register",userData).subscribe(data => {
      console.log(data)
  })
}
login(loginData:{}){
  return this.http.post(Enums.Environment.uri +'/login', loginData)
}
}