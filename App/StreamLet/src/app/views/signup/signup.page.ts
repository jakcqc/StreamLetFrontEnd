import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Router,NavigationEnd} from '@angular/router';
import {  ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
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
      'pass2':new FormControl(null)
  });
  }
  routePage(name){
    this.router.navigate([name]);
  }
  onSubmit(comment){
      let passmatch = true;
      let fail = false;
      if(comment.username == null|| comment.pass1== null || comment.pass2 == null){
        console.log("fail");
        this.router.navigate(['signup']);
        fail = true;
      }
    if(comment.pass1 != comment.pass2){
      console.log("passwords do not match");
      passmatch = false;
      this.router.navigate(['signup']);
    }
    //username taken
    //check current usernames if username is taken
    //return true or false 
    const userTaken = false;
    
    
    if(userTaken){
      console.log("username taken");
      this.router.navigate(['signup']);
      
    }
    if(!userTaken && passmatch && !fail){
      console.log("logged in");
      

      this.router.navigate(['/home']);
    }
    this.commentForm.reset();

  }
}
