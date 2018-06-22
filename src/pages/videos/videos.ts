import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import {Observable} from 'rxjs/Observable';
import { PlaylistPage } from '../playlist/playlist';


/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  videos: Observable<any[]>;
  keyword = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private youtubeProvider: YoutubeProvider, private alertCtrl: AlertController ) {
    
  }

  searchForVideos(){
    this.videos = this.youtubeProvider.videosByKeyword(this.keyword);
    try{
    this.videos.subscribe(data =>{
      console.log('data', data);
    }
      
      , err =>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'No Videos found for keywords',
          buttons: ['Ok']
        });
          alert.present();
      });
    } catch (err){
      console.log(err);
    }
  }

  openVideos(VideoId){
    console.log(VideoId);
    this.navCtrl.push(PlaylistPage, {
      'VideoId': VideoId
    });
  }
}