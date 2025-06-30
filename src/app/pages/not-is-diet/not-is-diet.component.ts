import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-not-is-diet',
  imports: [RouterLink, PrimaryButtonComponent],
  templateUrl: './not-is-diet.component.html',
  styleUrl: './not-is-diet.component.css'
})
export class NotIsDietComponent {

}
