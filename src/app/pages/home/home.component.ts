import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Card } from '../../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public auth: AuthService,
    private http: HttpClient,
    platform: Platform
    
  ) {
    platform.ready().then(() => {
      this.width = platform.width();
      
      this.height = platform.height();
      const slides = document.querySelectorAll<HTMLElement>('.movieImage');
      
      
      
      
      if(this.width < 800){
      const buttonHolder = document.querySelectorAll<HTMLDivElement>('.bHolder');
      
      buttonHolder.forEach(element => {
        element.style.display = "none";
      });
      slides.forEach(element => {
        element.style.width = "100px";
        element.style.height = "auto";
      });
      }else{
        slides.forEach(element => {
          element.style.width = "160px";
          element.style.height = "auto";
        });
      }
    });
  }

  cardsComedy = [];
  intComedy=1;
  cardsAction = [];
  intAction=1;
  cardsRomance = [];
  intRomance=1;
  cardsDrama = [];
  intDrama=1;;
  height;
  width;

  ngAfterViewInit(){
    this.getComedies();
  }

  getCardsComedy(){
    return this.cardsComedy;
  }

  resetNorm(){
    let animation = Math.floor(Math.random() * Math.floor(3));

    if(animation == 0){
      document.getElementById("contentMain").style.left = "-60%";
    }
    if(animation == 1){
      document.getElementById("contentMain").style.height = "0%";

    }
    if(animation == 2){
      document.getElementById("contentMain").style.width = "0%";

    }else{
      document.getElementById("contentMain").style.right = "100%";
    }
    document.getElementById("contentWrapper").style.display = "none";
    document.getElementById("contentMain").style.width = "0%";
    const displayer = document.getElementById("cardMain");
    displayer.style.display = "none";
    
  }

  getComedies(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=35&page='+this.intComedy).toPromise().then(
      data => {
        let parsedData = JSON.parse(JSON.stringify(data));
        for(let i = 0; i < parsedData.length; i++){
          let obj = parsedData[i];
          let card = new Card(obj);
          if(card.getPoster() != null)
            this.cardsComedy.push(card);
        }
      }
    );
    this.intComedy++;
    console.log(this.cardsComedy);

    if(this.intComedy == 2)
      this.getComedies();
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
    // document.getElementById("netflixLink").href = movieInfo.getNetflix();
    // document.getElementById("huluLink").href = movieInfo.getHulu();
    // document.getElementById("primeLink").href = movieInfo.getPrime();


    const widther = this.height*.85;
    movieImage.style.height = widther.toString() + "px";
        
    document.getElementById("cardMain").style.backgroundColor = "black";
    
    
  }

  
}