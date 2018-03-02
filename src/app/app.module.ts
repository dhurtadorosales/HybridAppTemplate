import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

//Pages
import { HomePage } from '../pages/home/home';
import { UserListPage } from '../pages/user-list/user-list';
import { UserNewPage } from '../pages/user-new/user-new';
import { AliasListPage } from '../pages/alias-list/alias-list';

//Providers
import { UserProvider } from '../providers/user.provider';
import { AliasProvider } from '../providers/alias.provider';



@NgModule({
    declarations: [
        MyApp,
        HomePage,
        UserListPage,
        UserNewPage,
        AliasListPage
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
        UserListPage,
        UserNewPage,
        AliasListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        UserProvider,
        AliasProvider,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
