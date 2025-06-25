import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UiBaseComponent } from './components/ui-base/ui-base.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, UiBaseComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-DailyDiet';
}
