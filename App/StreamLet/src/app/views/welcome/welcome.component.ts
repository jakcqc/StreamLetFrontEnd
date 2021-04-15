import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  width;
  height;
  smallWidth = "auto";
  smallFontSize = "10vw";
  bigWidth = "760px";
  bigFontSize = "120px";
  bigHeight;
  smallHeight = .50;
  constructor(platform:Platform) {
    platform.ready().then(() => {
        this.width = platform.width();
        this.height = platform.height();
        const speal = document.querySelector<HTMLDivElement>('#movies');
        if(this.width < 900){
        
          speal.style.width = this.smallWidth;
          speal.style.height = this.height*this.smallHeight + "px";
          speal.style.fontSize = this.smallFontSize;
          console.log(speal.style.height);
          
        }else{
          speal.style.fontSize = this.bigFontSize;
          speal.style.width = this.bigWidth;
          
        }
    }); 
    platform.resize.subscribe(async () => {
      this.width = platform.width();
        this.height = platform.height();
        const speal = document.querySelector<HTMLDivElement>('#movies');

        if(this.width < 900){
        
          
          speal.style.fontSize = this.smallFontSize;
          speal.style.width = this.smallWidth;
          speal.style.height = this.height*this.smallHeight + "px";

        }else{
          speal.style.fontSize = this.bigFontSize;
          speal.style.width = this.bigWidth;
        }
     
    });
  }

  ngOnInit() {}

}
