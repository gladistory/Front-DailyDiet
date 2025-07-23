import { Component, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private router = inject(Router);

  userInfo: any;
  userName: string = '';
  isAuthenticated: boolean = false;

  private readonly hiddenNavbarRoutes = [
    '/login',
    '/register',
  ];

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        this.isAuthenticated = this.hiddenNavbarRoutes.includes(currentUrl);
      }
    });

    this.authService.getUserInfo().subscribe({
      next: (res) => {
        this.userInfo = res;
        this.userName = this.userInfo["user"].name.split(' ')[0];
      }
    });

  }

  private authService = inject(AuthService);
  
  logout() {
    this.authService.logout();
  }

}
