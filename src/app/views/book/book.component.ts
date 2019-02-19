import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelModel } from 'src/app/interfaces/hotel';
import { EndpointsService } from 'src/app/services/endpoints.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  hotel: HotelModel;
  showMap = false;
  tabIndex = 0; // For tab change through dom
  today = new Date(); // For date picker
  reservationModel = {
    card: {}
  };
  hnyPot: any = null; // To prevent spammers
  bookingResult: any;

  constructor(
    private route: ActivatedRoute,
    private endpoints: EndpointsService) {}

  ngOnInit() {
    // Get the individual hotel data through resolver (file: app/services/hotel-resolve.service.ts)
    this.route.data.subscribe(resolvedData => {
      this.hotel = resolvedData.hotel;

      // Map directive requires number
      this.hotel.latitude = Number(this.hotel.latitude);
      this.hotel.longitude = Number(this.hotel.longitude);
    });
  }

  submitBooking() {
    // To prevent spams
    if (this.hnyPot !== null) {
      return alert('No bot shall pass!');
    }

    // Booking post
    this.endpoints.bookHotel(this.reservationModel).subscribe((response: any) => {
      this.bookingResult = {
        title: response.statusText,
        message: response.error
      };
    }, (response: any) => {
        this.bookingResult = {
          title: response.statusText,
          message: response.error
        };
    });
  }

}
