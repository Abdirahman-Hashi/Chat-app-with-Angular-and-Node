import { Component, OnInit, inject } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(){
  }
  
  ngOnInit(): void {
    console.log("user loaded successfully")
  }
}
