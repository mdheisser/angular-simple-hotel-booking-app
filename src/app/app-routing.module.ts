import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { BookComponent } from './views/book/book.component';
import { HotelResolver } from './services/hotel-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'book/:id',
    component: BookComponent,
    resolve: { hotel: HotelResolver}, // Passing individual hotel data to the component
    canActivate: [AuthGuard] // Auth requirement to reach the page
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
