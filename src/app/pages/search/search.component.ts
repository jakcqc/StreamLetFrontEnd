import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputData = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { 
    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.inputData = data.input;
  })
  }


ngOnInit() {
  this.getSearch(this.inputData);

}
intSearch = 0;
cardsSearch = [];


getSearch(input){
  console.log(input);
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
      console.log(this.cardsSearch);

  }
  );
  console.log("here");
  console.log(this.cardsSearch);
  this.intSearch++;
}

updateSearch(input){
this.cardsSearch = [];
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
    console.log(this.cardsSearch);

}
);
this.intSearch++;
}

  
}
