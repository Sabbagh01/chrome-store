import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/Navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { card } from './card/card.component';
import { categoryCard } from './card/category.card.component';
import { SecondTopNavBarComponent } from './Navigation/second.topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { Themes } from './Navigation/designer-linen-layout.component';
import { HomeLayoutComponent } from './Navigation/home-layout.component';
import { SignIn } from './Navigation/signin';
import { Recommended } from './Navigation/recommended';
import { Photos } from './Navigation/photos';
import { Fun } from './Navigation/fun';
import { Accessibility } from './Navigation/accessibility';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    card,
    categoryCard,
    Themes,
    HomeLayoutComponent,
    SignIn,
    Recommended,
    Photos,
    Fun,
    Accessibility
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
