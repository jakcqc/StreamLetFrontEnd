import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Card } from '../../models/card.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {

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
    
    constructor(platform:Platform, private activatedRoute: ActivatedRoute, private http: HttpClient) {
        this.activatedRoute.params.subscribe(data => {
            this.inputData = data.search;
        })
    platform.ready().then(() => {
        this.width = platform.width();
        this.height = platform.height();
        const speal = document.querySelector<HTMLDivElement>('#movies');
        // if(this.width < 900){
        
        //     speal.style.width = this.smallWidth;
        //     speal.style.height = this.height*this.smallHeight + "px";
        //     speal.style.fontSize = this.smallFontSize;
        //     console.log(speal.style.height);

        // }else{
        //     speal.style.fontSize = this.bigFontSize;
        //     speal.style.width = this.bigWidth;
        // }
    }); 
    platform.resize.subscribe(async () => {
        this.width = platform.width();
        this.height = platform.height();
        const speal = document.querySelector<HTMLDivElement>('#movies');

        // if(this.width < 900){   
        //     speal.style.fontSize = this.smallFontSize;
        //     speal.style.width = this.smallWidth;
        //     speal.style.height = this.height*this.smallHeight + "px";

        // }else{
        //     speal.style.fontSize = this.bigFontSize;
        //     speal.style.width = this.bigWidth;
        // }
    
    });
}

ngOnInit() {
    this.getSearch(this.inputData);

}
intSearch = 0;
cardsSearch = [];

getSearch(input){
    this.http.get('http://localhost:9091/searchQuery?title='+input).toPromise().then(
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
        console.log(this.cardsSearch);

    }
    );
    console.log("here");
    console.log(this.cardsSearch);
    this.intSearch++;
}

updateSearch(input){
  this.cardsSearch = [];
  this.http.get('http://localhost:9091/searchQuery?title='+input).toPromise().then(
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
      console.log(this.cardsSearch);

  }
  );
  console.log("here");
  console.log(this.cardsSearch);
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
  const result = async function getImageColor (){
    await analyze(movieInfo.getPoster());
  }
  console.log(result[0]);
  
  //console.log(result[0].color);
  
  document.getElementById("cardMain").style.backgroundColor = "black";
  
  
}


}