import {BrowserModule} from '@angular/platform-browser'
import {ApplicationRef, NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {AboutComponent} from './about/about.component'
import {HomeComponent} from './home/home.component'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './post/post.component'
import {AboutExtraComponent} from './about-extra/about-extra.component'
import {appRoutingModule} from "./app-routing.module";
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
