import { Component,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,NavigationEnd} from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Platform } from '@ionic/angular';
import { MovieServiceService } from '../services/movie-service.service';
import { IonSlides} from '@ionic/angular';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { GenreContainer } from '../models/genre-container.model';
import * as colorThief from 'colorThief';
import {UserLoginService} from '../services/user-login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild('slides1') slider: IonSlides;
  
  
  
  cards = [
    "Example","After",2,3,4,5,6,7,8,9,10,11,12,13,14,15
  ]
  cardsNew = [];
  
  genreContainer = new GenreContainer(this.http);


  cardsAction = [];
  cardsBiography = [];
  cardsComedy = [];
  intComedy = 1;
  intAction = 1;
  intBiography= 1;
  isOnComedy=false;
  isOnBiography = false;

  //total movie types to presented on the main page
  //first load fills these with the movie images
  //this does not include the search function movies 
  totalMovieGenres = {
  reccomended : [],
  watching : [],
  releases : [],
  comedies : [],
  horror : [],
  drama : [],
  animated : [],
  thriller : []
  };
  movieUpdater = 5;
  smallSearch;
  //color array for underline categories 
  colors = [
    "darkred",
    "green",
    "lightblue",
    "mediumslateblue",
    "darkyellow",
    "purple",
    "red",
    "mediumblue",
    "white",
    "yellow",
    "red",
    "blue",
    "darkgreen",
    "cyan",
    "darkcyan"
  ];
  movieData = "Jack Nicholson, Shelley Duvall, Danny Lloyd";
  width;
  height;
  streamTog = {netflix: false, hulu: false, prime: false};
  
  constructor(navCtrl: NavController, private router: Router, 
    platform: Platform, public movies: MovieServiceService, private http: HttpClient,private user: UserLoginService
    ) {
      
      this.user.setJson();
      this.initializeGenres();
      this.intializeStreamers();
      
      
      platform.ready().then(() => {
        this.width = platform.width();
        this.height = platform.height();
        const slides = document.querySelectorAll<HTMLElement>('.movieImage');
        const logo = document.querySelector<HTMLImageElement>('#logo');
        const account = document.querySelector<HTMLImageElement>('#accounter');
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
        if(this.width < 500){
          account.innerHTML = "| | |";
        }
      
      });
      platform.resize.subscribe(async () => {
        
        this.width = platform.width();
        this.height = platform.height();
        const slides = document.querySelectorAll<HTMLElement>('.movieImage');
        const logo = document.querySelector<HTMLImageElement>('#logo');
        const account = document.querySelector<HTMLImageElement>('#accounter');

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
      }
      if(this.width < 500){
        account.innerHTML = "| | |";
      }
      if(this.width > 800){
        logo.src = "assets/nameLogoV2.png";
        this.smallSearch = 0;
        slides.forEach(element => {
          element.style.width = "160px";
          element.style.height = "auto";
          account.innerHTML = "Account";
        });
      }
      
      });

    
  }
  // loadFuzzy(){
  //   var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {

  //     console.log(this.responseText);
       
  //   }
  // };
  // xhttp.open("GET", "assets/tester.txt", true);
  // xhttp.send();
  // }
  initializeGenres(){
   this.genreContainer = this.user.getGenres(this.genreContainer);
  }
  intializeStreamers(){
    console.log("Here");
    this.streamTog = this.user.getStreamer(this.streamTog);
    this.genreContainer.intializeStreamers(this.streamTog);
  }
  setGenreClient(genreName){
    this.genreContainer['isOn'+genreName] = !this.genreContainer['isOn'+genreName];

    this.user.setGenres(genreName);
    
  }
 
  setStreamers(stream){
    this.streamTog = this.user.getStreamer(this.streamTog);
    this.streamTog[stream] = !this.streamTog[stream];
    this.user.setStreamers(stream,this.streamTog[stream]);
    this.genreContainer.changeStreamers(this.streamTog);
  }
  tog = 0;
  showGenre(){
    const genres = document.querySelector<HTMLElement>("#buttonHolder");
    const bToggle = document.querySelector<HTMLElement>('#genreToggle');
  

    if(this.tog == 0){
      
    
    if(this.smallSearch == 1){
        genres.style.height = "700px";
    }else{
      genres.style.height = "300px";
    }
    this.tog = 1;
    }else{
      
      genres.style.height = "0";
      this.tog =0;
    }
    
  }
  hoverChange(type){
    if(this.smallSearch == 0){
      const searcher = document.querySelector<HTMLElement>("ion-searchbar");
      if(type == 0){
          searcher.style.width = "300px";
      }
      if(type == 1){
        searcher.style.width = "60px";
      }
    }
    
  }
  format(){
    if(this.smallSearch == 1){
      this.router.navigate(['find', " "]);
    }
    
    
  }
  historyStore(){

  }
  ngAfterViewInit(){
    let posters = document.getElementsByClassName("movieImage");
    let x = 0;
    
    let totalCards = document.querySelectorAll<HTMLElement>("ion-slide");
    this.setGenreColor();
    this.totalMovieGenres = this.movies.getMovieImage(this.totalMovieGenres);
  }
  routePage(name){
    this.router.navigate([name]);
  }

  search(input){
    this.router.navigate(['find', input])

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
    
    console.log(movieInfo);
    
    this.populateCard(movieImage,currentWidth, movieInfo);
    
  }
  populateCard(movieImage,currentWidth, movieInfo){
    const displayer = document.getElementById("cardMain");
    displayer.style.display = "block";
    console.log(displayer);
    
    
    let realImage = document.querySelector<HTMLImageElement>("#imageOnCard");
    realImage.setAttribute( 'src',movieInfo.getPoster());
    
    document.getElementById("cardTitle").innerHTML = movieInfo.getTitle();
    document.getElementById("cardDescription").innerHTML = movieInfo.getDescript();
    document.getElementById("cardDir").innerHTML = movieInfo.getDirectors();
    document.getElementById("cardCast").innerHTML = movieInfo.getCast();
    const netflixE = document.querySelector<HTMLAnchorElement>('#netflixLink');
    const huluE = document.querySelector<HTMLAnchorElement>('#huluLink');
    const PrimeE = document.querySelector<HTMLAnchorElement>('#primeLink');
    //also will add in database check for whether or not user has the slected services. 
    const netflixL = movieInfo.getNetflix();
    const huluL = movieInfo.getHulu();
    const primeL = movieInfo.getPrime();

    if( netflixL == null){
      netflixE.style.opacity = '.1';
    }
    if(huluL == null){
      huluE.style.opacity = '.1';
    }
    if(primeL == null){
      PrimeE.style.opacity = '.1';
    }
    netflixE.href = netflixL;
    huluE.href =huluL;
    PrimeE.href = primeL;


    const widther = this.height*.85;
    movieImage.style.height = widther.toString() + "px";
    
    
    const backR = document.getElementById("cardMain");
    backR.style.backgroundColor = "black";
    

    
    
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
  getMovieTitles(){

  }
  getMovieGenre(){

  }
  setGenreColor(){
    const test = document.querySelectorAll<HTMLElement>('.genreTitle');
    
    let i = 0;
    let curColor;
    
    test.forEach(element => {
      element.style.textDecorationColor = this.colors[i];
      i++;
      if(i>this.colors.length){
        i = 0;
      }

    });
  
  }

 


  
  

  
}
