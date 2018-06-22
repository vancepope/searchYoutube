import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { YoutubeProvider } from '../providers/youtube/youtube';
import {HttpModule} from '@angular/http';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import { VideosPage } from '../pages/videos/videos';
import { PlaylistPage } from '../pages/playlist/playlist';

@NgModule({
  declarations: [
    MyApp,
    VideosPage,
    PlaylistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VideosPage,
    PlaylistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeProvider,
    YoutubeVideoPlayer,
    YoutubeProvider
  ]
})
export class AppModule {}
