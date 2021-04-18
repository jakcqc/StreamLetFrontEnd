import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  routePage(name){
    this.router.navigate([name]);
  }
}
