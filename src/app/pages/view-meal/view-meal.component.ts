import { Component } from '@angular/core';
import { HideNavComponent } from '../../components/hide-nav/hide-nav.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-view-meal',
  imports: [HideNavComponent, PrimaryButtonComponent, SecundaryButtonComponent],
  templateUrl: './view-meal.component.html',
  styleUrl: './view-meal.component.css'
})
export class ViewMealComponent {

}
