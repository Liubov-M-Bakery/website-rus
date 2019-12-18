import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemName: string;

  constructor(
    private actRoute: ActivatedRoute) {
    const id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');

    this.itemName = id + '.jpg';


  }

}
