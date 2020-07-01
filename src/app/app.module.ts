import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FullPageBGComponent } from './full-page-bg/full-page-bg.component';
import { BigNavButtonComponent } from './big-nav-button/big-nav-button.component';
import { TitleServiceComponent } from './title-service/title-service.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FullPageBGComponent,
    BigNavButtonComponent,
    TitleServiceComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
