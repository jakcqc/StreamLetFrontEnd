import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,NavigationEnd} from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards = [
    "Example","After",2,3,4,5,6,7,8,9,10,11,12,13,14,15
  ]
  cardNumber = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wT5ayfO9mk-9pghpeBf3_PevRid76Nk-Cg&usqp=CAU",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
    "https://i.pinimg.com/736x/6d/a3/07/6da307ddd2d2f5c2aaf1f09b112b3257.jpg",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/black_widow_ver9_xlg_240x360_crop_center.progressive.jpg?v=1598017338",
    "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg",
    "https://i.redd.it/mkt3rwpuisz21.jpg",
    "https://maxcdn.icons8.com/app/uploads/2019/05/film-poster-graphic-design.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
  constructor(navCtrl: NavController, private router: Router) {
    
  }
  ngAfterViewInit(){
    let posters = document.getElementsByClassName("movieImage");
    let x= 0;
    while(x<7){
      posters[x].attributes[1].value = this.cardNumber[x]; 
      x++
    }
  }
  routePage(name){
    this.router.navigate([name]);
  }
  movieInfo(movieInfo){
    console.log(movieInfo);
    document.getElementById("contentWrapper").style.display = "block";
    let cMain = document.getElementById("contentMain");
    cMain.style.left = "30%";
    cMain.style.height = "90%";
    cMain.style.width = "40%";
    
  }
  getMovieImage(cNum){
    console.log(this.cardNumber[cNum]);
    
      return this.cardNumber[cNum];
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
  }


}
