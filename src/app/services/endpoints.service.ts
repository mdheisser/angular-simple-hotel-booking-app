import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { HotelModel } from '../interfaces/hotel';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }

  protected baseUrl = 'https://5c505db9ee97f600140480dd.mockapi.io';
  public hotelData: Array<HotelModel>;
  private hotelsObservable: Observable<Array<HotelModel>>;

  getHotels() {
    if (this.hotelData) { // Checks if the data already got pulled and stored
      return of(this.hotelData);
    } else if (this.hotelsObservable) {
      return this.hotelsObservable; // This ensures not to interrupt the process while resolving the observable
    } else {
      // Gets here if there's no cached data, and makes the api call
      this.hotelsObservable = this.http.get<Array<HotelModel>>(`${this.baseUrl}/hotels`, {
        observe: 'response' // To get response status etc.
      })
        .pipe(map(response => {
          this.hotelsObservable = null;
          if (response.status === 400) {
            return null;
          } else if (response.status === 200) {
            this.hotelData = response.body;
            return this.hotelData;
          }
        }), share());
      return this.hotelsObservable;
    }
  }

  getHotelInfo(id: String): Observable<HotelModel> {
    if (!this.hotelData) {
      return this.getHotels().pipe(map(hotels => hotels.find(hotel => hotel.id === id)));
    } else {
      return of(this.hotelData.filter(hotel => hotel.id === id)[0]);
    }
  }

  bookHotel(userReservationData) {
    return this.http.post(`${this.baseUrl}/booking`, userReservationData);
  }
}
