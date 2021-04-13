import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../models/card.model';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-content-slides',
  templateUrl: './content-slides.component.html',
  styleUrls: ['./content-slides.component.scss']
})
export class ContentSlidesComponent implements OnInit {

  @Input()
  title: string;

  constructor(
    private http: HttpClient,
    private homeComponent: HomeComponent
  ) { }

  ngOnInit(): void {
  }

  cards = [];

  getContent(){
    if(this.title == "Comedy"){
      this.cards=this.homeComponent.cardsComedy;
      this.getComedies();
    }

    if(this.title == "Action"){
      this.cards=this.homeComponent.cardsAction;
      this.getAction();
    }

    if(this.title == "Drama"){
      this.cards=this.homeComponent.cardsDrama;
      this.getDrama();
    }

    if(this.title == "Romance"){
      this.cards=this.homeComponent.cardsRomance;
      this.getRomance();
    }
  }

  getComedies(){
    this.http.get('http://localhost:9091/broadQuery?genre=35&page='+this.homeComponent.intComedy).toPromise().then(
      data => {
        let parsedData = JSON.parse(JSON.stringify(data));
        for(let i = 0; i < parsedData.length; i++){
          let obj = parsedData[i];
          let card = new Card(obj);
          if(card.getPoster() != null)
          this.homeComponent.cardsComedy.push(card);
        }
      }
    );
    this.homeComponent.intComedy++;
    console.log(this.cards);

    if(this.homeComponent.intComedy == 2)
      this.getComedies();
  }

  getAction(){
    this.http.get('http://localhost:9091/broadQuery?genre=28&page='+this.homeComponent.intAction).toPromise().then(
      data => {
        let parsedData = JSON.parse(JSON.stringify(data));
        for(let i = 0; i < parsedData.length; i++){
          let obj = parsedData[i];
          let card = new Card(obj);
          if(card.getPoster() != null)
          this.homeComponent.cardsAction.push(card);
        }
      }
    );
    this.homeComponent.intAction++;
    console.log(this.cards);

    if(this.homeComponent.intAction == 2)
      this.getAction();
  }

  getDrama(){
    this.http.get('http://localhost:9091/broadQuery?genre=18&page='+this.homeComponent.intDrama).toPromise().then(
      data => {
        let parsedData = JSON.parse(JSON.stringify(data));
        for(let i = 0; i < parsedData.length; i++){
          let obj = parsedData[i];
          let card = new Card(obj);
          if(card.getPoster() != null)
          this.homeComponent.cardsDrama.push(card);
        }
      }
    );
    this.homeComponent.intDrama++;
    console.log(this.cards);

    if(this.homeComponent.intDrama == 2)
      this.getDrama();
  }

  getRomance(){
    this.http.get('http://localhost:9091/broadQuery?genre=18&page='+this.homeComponent.intRomance).toPromise().then(
      data => {
        let parsedData = JSON.parse(JSON.stringify(data));
        for(let i = 0; i < parsedData.length; i++){
          let obj = parsedData[i];
          let card = new Card(obj);
          if(card.getPoster() != null)
          this.homeComponent.cardsRomance.push(card);
        }
      }
    );
    this.homeComponent.intRomance++;
    console.log(this.cards);

    if(this.homeComponent.intRomance == 2)
      this.getRomance();
  }

  movieInfo(card){
    this.homeComponent.movieInfo(card);
  }
}
