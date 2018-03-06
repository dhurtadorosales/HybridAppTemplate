import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Pages
import { HomePage } from '../pages/home/home';
import { UserListPage } from '../pages/user/user-list/user-list';
import { UserNewPage } from '../pages/user/user-new/user-new';
import { AliasListPage } from '../pages/alias/alias-list/alias-list';
import { TabsPage } from '../pages/common/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AliasNewPage } from '../pages/alias/alias-new/alias-new';
import { AliasEditPage } from '../pages/alias/alias-edit/alias-edit';

//Providers
import { UserProvider } from '../providers/user.provider';
import { AliasProvider } from '../providers/alias.provider';

//Storage
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        UserListPage,
        UserNewPage,
        AliasListPage,
        AliasNewPage,
        AliasEditPage,
        TabsPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        IonicStorageModule.forRoot(),
        FormsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        UserListPage,
        UserNewPage,
        AliasNewPage,
        AliasEditPage,
        AliasListPage,
        TabsPage,
        LoginPage
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
