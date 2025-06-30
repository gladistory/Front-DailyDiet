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
    '/not-is-diet'
  ];

  get hideNavbar() {
    return this.hiddenNavbarRoutes.includes(this.router.url);
  }
}
