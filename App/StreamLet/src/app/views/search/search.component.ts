import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Card } from '../../models/card.model';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
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
// getSearch(input){
//     this.http.get('http://localhost:9091/searchQuery?title='+input).toPromise().then(
//         data => {
//             console.log(data);
//             let parsedData = JSON.parse(JSON.stringify(data));
//             console.log(parsedData.length);

//         for(let i = 0; i < parsedData.length; i++){
//             let obj = parsedData[i];
//             let card = new Card(obj);
//             console.log(card);
//             this.cardsSearch.push(card);
//         }
//         console.log(this.cardsSearch);

//     }
//     );
//     console.log("here");
//     console.log(this.cardsSearch);
//     this.intSearch++;
// }

getSearch(input){
    this.http.get('http://18.18.243.225:9091/broadQuery?genre=35&page=1').toPromise().then(
      data => {
        let parsedData = JSON.parse(JSON.stringify(data));
        for(let i = 0; i < parsedData.length; i++){
          let obj = parsedData[i];
          let card = new Card(obj);
          this.cardsSearch.push(card);
        }
        this.isDataAvailable = true;
    }
    );
  }

}
