import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRusComponent } from './components/home-rus/home-rus.component';
import { ItemGalleryRusComponent } from './components/item-gallery-rus/item-gallery-rus.component';
import { ItemDetailsRusComponent } from './components/item-details-rus/item-details-rus.component';
import { AboutRusComponent } from './components/about-rus/about-rus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarRusComponent } from './components/navbar-rus/navbar-rus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRusComponent,
    ItemGalleryRusComponent,
    ItemDetailsRusComponent,
    AboutRusComponent,
    PageNotFoundComponent,
    NavbarRusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
