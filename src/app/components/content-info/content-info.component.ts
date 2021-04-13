import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.scss']
})
export class ContentInfoComponent implements OnInit {

  constructor(
    private homeComponent: HomeComponent

  ) { }

  ngOnInit(): void {
  }


  resetNorm(){
    this.homeComponent.resetNorm();
  }


}
