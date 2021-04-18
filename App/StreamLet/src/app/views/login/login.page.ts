import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Router,NavigationEnd} from '@angular/router';
import {  ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  commentForm: any;
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.commentForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.commentForm = new FormGroup({          
      'username':new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
      'pass1':new FormControl(null),
      
  });
  }
  routePage(name){
    this.router.navigate([name]);
  }
  onSubmit(comment){
    let success;
    if(comment.username == null || comment.pass1 == null){
      success = 0;
    }else{
      success = 1;
    }
    //comment.username
    //comment.pass1 
    //you need to link up database and store this information and check it with the database
    //if good success == 1, else == 0 
  
    if(success == 1){
      this.commentForm.reset();
     this.router.navigate(['/home']);

    //after pass we need to set const that user is logged in and store their info in an object that we can call to get their userID, etc
    }else{
      console.log("fail");
      this.commentForm.reset();
      this.router.navigate(['/login']);
    }
  }
}
