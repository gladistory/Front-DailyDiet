import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-DailyDiet';
  constructor(private router: Router) { }

  private readonly hiddenNavbarRoutes = [
    '/view-metrics',
    '/create-meal',
    '/is-diet',
    '/not-is-diet',
  ];

  private readonly hiddenNavbarPatterns = [
    /^\/view-meal\/[^\/]+$/
  ];

  get hideNavbar() {
    return (
      this.hiddenNavbarRoutes.includes(this.router.url) ||
      this.hiddenNavbarPatterns.some(pattern => pattern.test(this.router.url))
    );
  }
}
