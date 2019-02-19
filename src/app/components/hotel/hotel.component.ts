import { Component, OnInit, Input } from '@angular/core';
import { HotelModel } from 'src/app/interfaces/hotel';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() hotelData: HotelModel;

  constructor() { }

  ngOnInit() {
  }

}
