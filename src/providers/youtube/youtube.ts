import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {
  
  constructor(public http: Http) {

  }
  videosByKeyword(keyword){
    let apiKey = 'AIzaSyBvEdv3cD1VBLAGhTxhiTmhU98DfbyePLQ';
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&q=' + keyword + '&part=snippet,id&maxResults=20' )
    .map(res =>{
      return res.json()['items'];
    })
  }
}
