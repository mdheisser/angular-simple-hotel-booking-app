import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { EndpointsService } from './services/endpoints.service';
import { LoginComponent } from './views/login/login.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { BookComponent } from './views/book/book.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MaterialModule } from './feature-modules/material.module';
import { HotelResolver } from './services/hotel-resolve.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    HotelComponent,
    BookComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCile_I3KYEfHXQa4YYyK0cKC7N8x1FUzY'
    })
  ],
  providers: [EndpointsService, HotelResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
