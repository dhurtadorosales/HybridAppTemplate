import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from "../pages/users/users";
import { UserProvider } from "../providers/user.provider";
import { HttpModule } from "@angular/http";
import {UserNewPage} from "../pages/user-new/user-new";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        UsersPage,
        UserNewPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        UsersPage,
        UserNewPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        UserProvider,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
