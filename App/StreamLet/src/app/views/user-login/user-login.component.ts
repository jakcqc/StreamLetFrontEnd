import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  commentForm: FormGroup;
  constructor(private router: Router,public formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {}
  routePage(name){
    this.router.navigate([name]);
  }
  onsubmit(){
    console.log("hello");
    
  }
}
