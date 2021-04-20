import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import userData from 'src/app/models/userData.json';
import {UserDataType} from 'src/app/models/user-data-type';
import { GenreContainer } from '../models/genre-container.model';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  userDater : UserDataType;
  constructor() { 
  }
  setJson(){
    
    if(JSON.parse(localStorage.getItem('userData')) == null){
      this.addUserData();
    }else{
    userData.userData = JSON.parse(localStorage.getItem('userData'));
    }
    
  }
  addUserData(){
    
    localStorage.setItem('userData',JSON.stringify(userData.userData));
    
  }
  setHistory(id){
    console.log(id);
    userData.userData.history.push(id);
    this.addUserData();
  }
  setStreamers(stream, value){
    
    
    if(stream == "netflix"){
      userData.userData.netflix = value;
    }
    if(stream == "hulu"){
      userData.userData.hulu = value;
    }
    if(stream == "prime"){
      userData.userData.prime = value;
    }
    
    this.addUserData();
  }

  setGenres(gName){
    
    
    
    const currentIndex =  userData.userData.genre.indexOf(gName);

    if(userData.userData.genre[currentIndex] == null){
      userData.userData.genre.push(gName);
       
    }else{
        const tempArr = userData.userData.genre.splice(0,currentIndex);
        userData.userData.genre.shift();
        userData.userData.genre = userData.userData.genre.concat(tempArr);
        
    }

    this.addUserData();
    
  }
  getStreamer(streamers){
    streamers['netflix'] = userData.userData.netflix;
    streamers['hulu'] = userData.userData.hulu;
    streamers['prime'] = userData.userData.prime;
    return streamers;
  }
  checkIfLogged(){

  }
  getGenres(genres){
    
    
      let totalG = userData.userData.genre;
        for(let i = 0; i < totalG.length;i++){
         
          
          genres['isOn'+totalG[i]] = true;
        }
        
      return genres;
  }
}
