import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-percent',
  imports: [RouterLink],
  templateUrl: './percent.component.html',
  styleUrl: './percent.component.css'
})
export class PercentComponent {
  @Input() link: string = '';

}
