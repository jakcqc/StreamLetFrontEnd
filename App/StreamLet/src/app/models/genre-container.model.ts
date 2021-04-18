import { Card } from "./card.model";
import { HttpClient } from '@angular/common/http';

export class GenreContainer { 

cardsAction: Card[];
intAction: number;
isOnAction: boolean;

cardsAdventure: Card[];
intAdventure: number;
isOnAdventure: boolean;

cardsAnimation: Card[];
intAnimation: number;
isOnAnimation: boolean;

cardsBiography: Card[];
intBiography: number;
isOnBiography: boolean;

cardsComedy: Card[];
intComedy: number;
isOnComedy: boolean;

cardsCrime: Card[];
intCrime: number;
isOnCrime: boolean;

cardsDocumentary: Card[];
intDocumentary: number;
isOnDocumentary: boolean;

cardsDrama: Card[];
intDrama: number;
isOnDrama: boolean;

cardsFamily: Card[];
intFamily: number;
isOnFamily: boolean;

cardsFantasy: Card[];
intFantasy: number;
isOnFantasy: boolean;

cardsFilmNoir: Card[];
intFilmNoir: number;
isOnFilmNoir: boolean;

cardsGameShow: Card[];
intGameShow: number;
isOnGameShow: boolean;

cardsHistory: Card[];
intHistory: number;
isOnHistory: boolean;

cardsHorror: Card[];
intHorror: number;
isOnHorror: boolean;

cardsMusic: Card[];
intMusic: number;
isOnMusic: boolean;

cardsMusical: Card[];
intMusical: number;
isOnMusical: boolean;

cardsMystery: Card[];
intMystery: number;
isOnMystery: boolean;

cardsNews: Card[];
intNews: number;
isOnNews: boolean;

cardsReality: Card[];
intReality: number;
isOnReality: boolean;

cardsRomance: Card[];
intRomance: number;
isOnRomance: boolean;

cardsScienceFiction: Card[];
intScienceFiction: number;
isOnScienceFiction: boolean;

cardsShort: Card[];
intShort: number;
isOnShort: boolean;

cardsSport: Card[];
intSport: number;
isOnSport: boolean;

cardsTalkShow: Card[];
intTalkShow: number;
isOnTalkShow: boolean;

cardsThriller: Card[];
intThriller: number;
isOnThriller: boolean;

cardsWar: Card[];
intWar: number;
isOnWar: boolean;

cardsWestern: Card[];
intWestern: number;
isOnWestern: boolean;

    constructor(private http: HttpClient){
        this.cardsAction=[];
        this.intAction=1;
        this.isOnAction=true;

        this.cardsAdventure=[];
        this.intAdventure=1;
        this.isOnAdventure=true;

        this.cardsAnimation=[];
        this.intAnimation=1;
        this.isOnAnimation=false;

        this.cardsBiography=[];
        this.intBiography=1;
        this.isOnBiography=false;

        this.cardsComedy=[];
        this.intComedy=1;
        this.isOnComedy=true;

        this.cardsCrime=[];
        this.intCrime=1;
        this.isOnCrime=false;

        this.cardsDocumentary=[];
        this.intDocumentary=1;
        this.isOnDocumentary=false;

        this.cardsDrama=[];
        this.intDrama=1;
        this.isOnDrama=false;

        this.cardsFamily=[];
        this.intFamily=1;
        this.isOnFamily=true;

        this.cardsFantasy=[];
        this.intFantasy=1;
        this.isOnFantasy=false;

        this.cardsFilmNoir=[];
        this.intFilmNoir=1;
        this.isOnFilmNoir=false;

        this.cardsGameShow=[];
        this.intGameShow=1;
        this.isOnGameShow=false;

        this.cardsHistory=[];
        this.intHistory=1;
        this.isOnHistory=false;

        this.cardsHorror=[];
        this.intHorror=1;
        this.isOnHorror=false;

        this.cardsMusic=[];
        this.intMusic=1;
        this.isOnMusic=false;

        this.cardsMusical=[];
        this.intMusical=1;
        this.isOnMusical=false;

        this.cardsMystery=[];
        this.intMystery=1;
        this.isOnMystery=false;

        this.cardsNews=[];
        this.intNews=1;
        this.isOnNews=false;

        this.cardsReality=[];
        this.intReality=1;
        this.isOnReality=false;

        this.cardsRomance=[];
        this.intRomance=1;
        this.isOnRomance=false;

        this.cardsScienceFiction=[];
        this.intScienceFiction=1;
        this.isOnScienceFiction=true;

        this.cardsShort=[];
        this.intShort=1;
        this.isOnShort=false;

        this.cardsSport=[];
        this.intSport=1;
        this.isOnSport=false;

        this.cardsTalkShow=[];
        this.intTalkShow=1;
        this.isOnTalkShow=false;

        this.cardsThriller=[];
        this.intThriller=1;
        this.isOnThriller=false;

        this.cardsWar=[];
        this.intWar=1;
        this.isOnWar=false;

        this.cardsWestern=[];
        this.intWestern=1;
        this.isOnWestern=false;
}

getAction(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=28&page='+this.intAction).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsAction.push(card);
    }
    }
    );
    this.intAction++;
    if(this.intAction==2)
    this.getAction();
    }
    
    getAdventure(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=12&page='+this.intAdventure).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsAdventure.push(card);
    }
    }
    );
    this.intAdventure++;
    if(this.intAdventure==2)
    this.getAdventure();
    }
    
    getAnimation(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=16&page='+this.intAnimation).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsAnimation.push(card);
    }
    }
    );
    this.intAnimation++;
    if(this.intAnimation==2)
    this.getAnimation();
    }
    
    getBiography(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=1&page='+this.intBiography).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsBiography.push(card);
    }
    }
    );
    this.intBiography++;
    if(this.intBiography==2)
    this.getBiography();
    }
    
    getComedy(){
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
    if(this.intComedy==2)
    this.getComedy();
    }
    
    getCrime(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=80&page='+this.intCrime).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsCrime.push(card);
    }
    }
    );
    this.intCrime++;
    if(this.intCrime==2)
    this.getCrime();
    }
    
    getDocumentary(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=99&page='+this.intDocumentary).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsDocumentary.push(card);
    }
    }
    );
    this.intDocumentary++;
    if(this.intDocumentary==2)
    this.getDocumentary();
    }
    
    getDrama(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=18&page='+this.intDrama).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsDrama.push(card);
    }
    }
    );
    this.intDrama++;
    if(this.intDrama==2)
    this.getDrama();
    }
    
    getFamily(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=10751&page='+this.intFamily).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsFamily.push(card);
    }
    }
    );
    this.intFamily++;
    if(this.intFamily==2)
    this.getFamily();
    }
    
    getFantasy(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=14&page='+this.intFantasy).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsFantasy.push(card);
    }
    }
    );
    this.intFantasy++;
    if(this.intFantasy==2)
    this.getFantasy();
    }
    
    getFilmNoir(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=2&page='+this.intFilmNoir).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsFilmNoir.push(card);
    }
    }
    );
    this.intFilmNoir++;
    if(this.intFilmNoir==2)
    this.getFilmNoir();
    }
    
    getGameShow(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=3&page='+this.intGameShow).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsGameShow.push(card);
    }
    }
    );
    this.intGameShow++;
    if(this.intGameShow==2)
    this.getGameShow();
    }
    
    getHistory(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=36&page='+this.intHistory).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsHistory.push(card);
    }
    }
    );
    this.intHistory++;
    if(this.intHistory==2)
    this.getHistory();
    }
    
    getHorror(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=27&page='+this.intHorror).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsHorror.push(card);
    }
    }
    );
    this.intHorror++;
    if(this.intHorror==2)
    this.getHorror();
    }
    
    getMusic(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=10402&page='+this.intMusic).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsMusic.push(card);
    }
    }
    );
    this.intMusic++;
    if(this.intMusic==2)
    this.getMusic();
    }
    
    getMusical(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=4&page='+this.intMusical).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsMusical.push(card);
    }
    }
    );
    this.intMusical++;
    if(this.intMusical==2)
    this.getMusical();
    }
    
    getMystery(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=9648&page='+this.intMystery).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsMystery.push(card);
    }
    }
    );
    this.intMystery++;
    if(this.intMystery==2)
    this.getMystery();
    }
    
    getNews(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=10763&page='+this.intNews).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsNews.push(card);
    }
    }
    );
    this.intNews++;
    if(this.intNews==2)
    this.getNews();
    }
    
    getReality(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=10764&page='+this.intReality).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsReality.push(card);
    }
    }
    );
    this.intReality++;
    if(this.intReality==2)
    this.getReality();
    }
    
    getRomance(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=10749&page='+this.intRomance).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsRomance.push(card);
    }
    }
    );
    this.intRomance++;
    if(this.intRomance==2)
    this.getRomance();
    }
    
    getScienceFiction(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=878&page='+this.intScienceFiction).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsScienceFiction.push(card);
    }
    }
    );
    this.intScienceFiction++;
    if(this.intScienceFiction==2)
    this.getScienceFiction();
    }
    
    getShort(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=6&page='+this.intShort).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsShort.push(card);
    }
    }
    );
    this.intShort++;
    if(this.intShort==2)
    this.getShort();
    }
    
    getSport(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=5&page='+this.intSport).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsSport.push(card);
    }
    }
    );
    this.intSport++;
    if(this.intSport==2)
    this.getSport();
    }
    
    getTalkShow(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=10767&page='+this.intTalkShow).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsTalkShow.push(card);
    }
    }
    );
    this.intTalkShow++;
    if(this.intTalkShow==2)
    this.getTalkShow();
    }
    
    getThriller(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=53&page='+this.intThriller).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsThriller.push(card);
    }
    }
    );
    this.intThriller++;
    if(this.intThriller==2)
    this.getThriller();
    }
    
    getWar(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=10752&page='+this.intWar).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsWar.push(card);
    }
    }
    );
    this.intWar++;
    if(this.intWar==2)
    this.getWar();
    }
    
    getWestern(){
    this.http.get('http://18.188.243.225:9091/broadQuery?genre=37&page='+this.intWestern).toPromise().then(
    data => {
    let parsedData = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < parsedData.length; i++){
    let obj = parsedData[i];
    let card = new Card(obj);
    if(card.getPoster() != null)
    this.cardsWestern.push(card);
    }
    }
    );
    this.intWestern++;
    if(this.intWestern==2)
    this.getWestern();
    }
    

}