import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router) {
  }

  // Log In/Out button behaviour (in the header)
  logInOrOut() {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
