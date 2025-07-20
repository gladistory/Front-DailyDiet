import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
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

    if (this.hiddenNavbarRoutes.includes(this.router.url)) {
      this.isAuthenticated = true;
    }

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
