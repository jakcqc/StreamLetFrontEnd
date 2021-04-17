import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Card } from '../../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
    smallSearch;
    width;
    height;
    smallWidth = "auto";
    smallFontSize = "10vw";
    bigWidth = "760px";
    bigFontSize = "120px";
    bigHeight;
    smallHeight = .50;
    inputData = "";
    isDataAvailable = false;
    
    constructor(platform:Platform, private activatedRoute: ActivatedRoute, private http: HttpClient,private router: Router) {
        this.activatedRoute.params.subscribe(data => {
            this.inputData = data.search;
        })
    platform.ready().then(() => {
      this.width = platform.width();
      this.height = platform.height();
      const slides = document.querySelectorAll<HTMLElement>('.movieImage');
      const logo = document.querySelector<HTMLImageElement>('#logo');
      if(this.width < 800){
        this.smallSearch = 1;
      const buttonHolder = document.querySelectorAll<HTMLDivElement>('.bHolder');
      
      logo.src = "assets/icon/sIconV3.png";
      buttonHolder.forEach(element => {
        element.style.display = "none";
      });
      slides.forEach(element => {
        element.style.width = "100px";
        element.style.height = "auto";
      });
      }else{
        logo.src = "assets/nameLogoV2.png";
        this.smallSearch = 0;
        slides.forEach(element => {
          element.style.width = "160px";
          element.style.height = "auto";
        });
      }
    
    });
    platform.resize.subscribe(async () => {
      
      this.width = platform.width();
      this.height = platform.height();
      const slides = document.querySelectorAll<HTMLElement>('.movieImage');
      const logo = document.querySelector<HTMLImageElement>('#logo');
    if(this.width < 800){
      this.smallSearch = 1;
    const buttonHolder = document.querySelectorAll<HTMLDivElement>('.bHolder');
    
      logo.src = "assets/icon/sIconV3.png";
    buttonHolder.forEach(element => {
      element.style.display = "none";
    });
    slides.forEach(element => {
      element.style.width = "100px";
      element.style.height = "auto";
    });
    }else{
      logo.src = "assets/nameLogoV2.png";
      this.smallSearch = 0;
      slides.forEach(element => {
        element.style.width = "160px";
        element.style.height = "auto";
      });
    }
    
    });
}

ngOnInit() {
    this.getSearch(this.inputData);

}
intSearch = 0;
cardsSearch = [];

getSearch(input){
    this.http.get('http://18.188.243.225:9091/searchQuery?title='+input).toPromise().then(
        data => {
            console.log(data);
            let parsedData = JSON.parse(JSON.stringify(data));
            console.log(parsedData.length);

        for(let i = 0; i < parsedData.length; i++){
            let obj = parsedData[i];
            let card = new Card(obj);
            console.log(card);
            this.cardsSearch.push(card);
        }
        

    }
    );
    
    this.intSearch++;
}

updateSearch(input){
  this.cardsSearch = [];
  this.http.get('http://18.188.243.225:9091/searchQuery?title='+input).toPromise().then(
      data => {
          
          let parsedData = JSON.parse(JSON.stringify(data));
          

      for(let i = 0; i < parsedData.length; i++){
          let obj = parsedData[i];
          let card = new Card(obj);
          
          this.cardsSearch.push(card);
      }
      

  }
  );
  
  this.intSearch++;
}
movieInfo(movieInfo){
  document.getElementById("contentWrapper").style.display = "block";
  const movieImage = document.getElementById("movieImageCard");
  let cMain = document.getElementById("contentMain");
  
let currentWidth;
  
  if(this.width < 800){
    
    cMain.style.width = "100%";
    currentWidth = 1;
    cMain.style.left = "0%";
    movieImage.style.backgroundPosition = "none";
  }
  else{
    cMain.style.width = "40%";
    currentWidth = .40;

    cMain.style.left = "30%";
    movieImage.style.backgroundPosition = "center";
  }
  cMain.style.right = "none";
  const tempHeight = this.height/1.1;    
  cMain.style.height = tempHeight.toString() + "px";
  
  
  this.populateCard(movieImage,currentWidth, movieInfo);
  
}
routePage(name){
  this.router.navigate([name]);
}
populateCard(movieImage,currentWidth, movieInfo){
  const displayer = document.getElementById("cardMain");
  displayer.style.display = "block";
  
  
  document.getElementById("imageOnCard").setAttribute( 'src',movieInfo.getPoster());
  document.getElementById("cardTitle").innerHTML = movieInfo.getTitle();
  document.getElementById("cardDescription").innerHTML = movieInfo.getDescript();
  document.getElementById("cardDir").innerHTML = movieInfo.getDirectors();
  document.getElementById("cardCast").innerHTML = movieInfo.getCast();

  const widther = this.height*.85;
  movieImage.style.height = widther.toString() + "px";
  
  
  document.getElementById("cardMain").style.backgroundColor = "black";
  
  
}


}