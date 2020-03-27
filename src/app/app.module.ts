import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from "ngx-bootstrap";
import {TooltipModule} from "ngx-bootstrap";
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavBarComponent} from './shared-components/nav-bar/nav-bar.component';
import {ScrollingBannerComponent} from './pages/home/scrolling-banner/scrolling-banner.component';
import {BookNowBannerComponent} from './pages/home/book-now-banner/book-now-banner.component';
import {BannerItemComponent} from './pages/home/scrolling-banner/banner-item/banner-item.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { ServicesPageComponent } from './pages/services/services-page/services-page.component';
import { ServiceComponent } from './pages/services/services-page/service/service.component';
import { ClientReferencesComponent } from './pages/client-references/client-references.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'client-references', component: ClientReferencesComponent},
  {path: 'blog', component: BookNowBannerComponent},
  {path: 'about', component: BookNowBannerComponent},
  {path: 'investment-principals', component: BookNowBannerComponent},
  {path: 'contact', component: BookNowBannerComponent},
  {
    path: 'test123',
    component: BookNowBannerComponent,
    data: {title: 'Heroes List'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: BookNowBannerComponent} //Page Not Found Component
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ScrollingBannerComponent,
    BookNowBannerComponent,
    BannerItemComponent,
    FooterComponent,
    ServicesPageComponent,
    ServiceComponent,
    ClientReferencesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
