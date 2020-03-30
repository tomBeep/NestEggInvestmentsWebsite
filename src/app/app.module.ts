import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from "ngx-bootstrap";
import {TooltipModule} from "ngx-bootstrap";
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavBarComponent} from './shared-components/nav-bar/nav-bar.component';
import {ScrollingBannerComponent} from './pages/home/scrolling-banner/scrolling-banner.component';
import {BannerItemComponent} from './pages/home/scrolling-banner/banner-item/banner-item.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceComponent } from './pages/services/service/service.component';
import { ClientReferencesComponent } from './pages/client-references/client-references.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { InvestmentPrincipalsComponent } from './pages/investment-principals/investment-principals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeanInfoComponent } from './shared-components/dean-info/dean-info.component';
import { PageHeaderComponent } from './shared-components/page-header/page-header.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'client-references', component: ClientReferencesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'investment-principals', component: InvestmentPrincipalsComponent},
  {path: 'contact', component: ContactComponent},
  // {
  //   path: 'test123',
  //   component: BookNowBannerComponent,
  //   data: {title: 'Heroes List'}
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent} //Page Not Found Component
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ScrollingBannerComponent,
    BannerItemComponent,
    FooterComponent,
    ServicesComponent,
    ServiceComponent,
    ClientReferencesComponent,
    BlogComponent,
    AboutComponent,
    InvestmentPrincipalsComponent,
    ContactComponent,
    PageNotFoundComponent,
    DeanInfoComponent,
    PageHeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
