import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from "ngx-bootstrap";
import {TooltipModule} from "ngx-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { ScrollingBannerComponent } from './pages/home/scrolling-banner/scrolling-banner.component';
import { BookNowBannerComponent } from './pages/home/book-now-banner/book-now-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ScrollingBannerComponent,
    BookNowBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
