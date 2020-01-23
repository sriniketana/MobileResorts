import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DataStore } from './dataStore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from '../providers/live-update/live-update';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LandingPage } from "../pages/landing/landing";
import { ReservationsPage } from "../pages/reservations/reservations";
import { ChatbotPage } from "../pages/chatbot/chatbot";
import { AppDisabled } from './app_disable';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,LandingPage,ReservationsPage,ChatbotPage,AppDisabled],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,LandingPage,ReservationsPage,ChatbotPage,AppDisabled],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LiveUpdateProvider
  ]
})
export class AppModule {}
