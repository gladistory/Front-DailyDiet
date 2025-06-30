import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hide-nav',
  imports: [RouterLink],
  templateUrl: './hide-nav.component.html',
  styleUrl: './hide-nav.component.css'
})
export class HideNavComponent {

  @Input() title: string = '';

}
