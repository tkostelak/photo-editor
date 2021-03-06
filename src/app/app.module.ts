//MODULES
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
//PIPES AND SERVICES
import { ImageFilterPipe} from './shared/filter.pipe'
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { AuthenticationGuard } from './services/authenticationGuard.service';
import { AuthenticationService } from './services/authentication.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { Routing } from './app.routing'
import { WelcomeComponent } from './welcome/welcome.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe,
    WelcomeComponent,
    UploadComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [ImageFilterPipe,
     AuthenticationGuard,
     ImageService,
     AuthenticationService,
     UploadService,
     AngularFireDatabase
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
