import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../shared/token-storage.service';
import {AuthService} from '../shared/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
  private loggedInUpdate: Subscription;

  constructor(private tokenStorageService: TokenStorageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }

    this.loggedInUpdate = this.authService.getLoggedIn().subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.tokenStorageService.signOut();
    this.authService.setAdminLoggedIn(false);
  }

}
