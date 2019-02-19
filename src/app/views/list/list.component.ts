import { Component, EventEmitter } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { HotelModel } from 'src/app/interfaces/hotel';
import { Observable, of } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  hotels: Observable<Array<HotelModel>>;
  searchQuery: String;

  constructor(private endpoints: EndpointsService) {
    this.hotels = this.endpoints.getHotels();
  }

  // Method for availability filter
  toggleAvailable(event: EventEmitter<MatSlideToggleChange>) {
    if (event['checked']) {
      // We have to use the endpoints method here
      // this.hotels.subscribe(...) would trigger another XHR call
      this.endpoints.getHotels().subscribe(data => {
        this.hotels = of(data.filter(hotel => hotel.available));
      });
    } else {
      this.hotels = this.endpoints.getHotels();
    }
  }

}
