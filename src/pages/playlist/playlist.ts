import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  videos: Observable<any[]>;
  url;
  constructor(public navCtrl: NavController, private plt: Platform ,private youtube: YoutubeVideoPlayer, public navParams: NavParams, private youtubeProvider: YoutubeProvider) {
    let keyword = this.navParams.get('id');
    this.videos = this.youtubeProvider.videosByKeyword(keyword);
    
  }
  openVideo(videoId) {
    videoId = this.navParams.get('VideoId');
    this.url = 'https://www.youtube.com/watch?v=' + videoId;
    console.log(videoId);
    if (this.plt.is('cordova')){
      this.youtube.openVideo(videoId);
    } else {
     window.open(this.url);
    }
  }
}
