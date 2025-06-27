import { Component } from '@angular/core';
import { PercentComponent } from "../../components/percent/percent.component";
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-home',
  imports: [PercentComponent, PrimaryButtonComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
