import { Component,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,NavigationEnd} from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Platform } from '@ionic/angular';
import { MovieServiceService } from '../services/movie-service.service';
import { IonSlides} from '@ionic/angular';

import analyze from 'rgbaster';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonSlides) slides: IonSlides;
  
  
  
  
  cards = [
    "Example","After",2,3,4,5,6,7,8,9,10,11,12,13,14,15
  ]

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
  
  width;
  height;
  constructor(navCtrl: NavController, private router: Router, 
    platform: Platform, public movies: MovieServiceService,
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
  ngAfterViewInit(){
    let posters = document.getElementsByClassName("movieImage");
    let x = 0;
    
    
    this.setGenreColor();
    this.totalMovieGenres = this.movies.getMovieImage(this.totalMovieGenres);
    //set movie images of selected cards
    //
    while(x<15){
      posters[x].attributes[1].value = this.totalMovieGenres.reccomended[x]; 
      x++
    }

   
  }
  routePage(name){
    this.router.navigate([name]);
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
    
    
    this.populateCard(movieImage,currentWidth);
    
  }
  populateCard(movieImage,currentWidth){
    const displayer = document.getElementById("cardMain");
    displayer.style.display = "block";
    
    //movieImage.style.backgroundImage = "url('/assets/theShining.jpg')";
    
    let cImage = document.getElementById("imageOnCard");
    cImage.setAttribute( 'src','assets/theShining.jpg');
    const widther = this.height*.85;
    movieImage.style.height = widther.toString() + "px";
    const result = async function getImageColor (){
      await analyze('assets/theShining.jpg');
    }
    console.log(result[0]);
    
    //console.log(result[0].color);
    
    document.getElementById("cardMain").style.backgroundColor = "black";
    
    
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
  streamingServiceRoute(route){
    //reroute the user to the proper video route 
    //call the api to get the right data for the reroute 
    
    route = this.movies.getMovieroute(route);
    console.log(route);
    

  }
  setGenreColor(){
    const test = document.querySelectorAll<HTMLElement>('.genreTitle');
    
    let i = 0;
    let curColor;
    
    test.forEach(element => {
      element.style.textDecorationColor = this.colors[i];
      i++;

    });
  
  }

}
