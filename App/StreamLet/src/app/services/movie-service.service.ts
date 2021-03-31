import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }
  cardImage = [];
  
  getMovieImage(totalMovies){
    //this is where api backend call happens to get movie images when first populating the page
    //right now using psuedo data for testing 
    this.cardImage = [
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
      "https://www.godisinthetvzine.co.uk/wp-content/uploads/2020/06/IMG_20200602_120716_501.jpg",
    ]
    //psuedo data is set in the movie object
    totalMovies.reccomended = this.cardImage;

    //returns total movie object 
    return totalMovies;
  }
  
}
