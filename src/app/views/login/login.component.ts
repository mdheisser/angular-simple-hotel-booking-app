import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    // This is later use to redirect the user to the page s/he came from (if that page is auth guarded)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        () => {
          this.loading = false;
          this.model = {};
        });
  }

}
