import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EndpointsService } from './endpoints.service';
import { Observable } from 'rxjs';
import { HotelModel } from '../interfaces/hotel';


// This is for passing individual hotel data to book page since I don't have an endpoint
// from which I can get the data by id
@Injectable()
export class HotelResolver implements Resolve<HotelModel> {
  constructor(private endpoints: EndpointsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<HotelModel> {
    const id = route.params['id'];
    return this.endpoints.getHotelInfo(id);
  }
}
