import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ItemGalleryComponent } from '../item-gallery/item-gallery.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { AboutComponent } from '../about/about.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
