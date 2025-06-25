import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PercentComponent } from './components/percent/percent.component';
import { UiBaseComponent } from './components/ui-base/ui-base.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PercentComponent, UiBaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-DailyDiet';
}
