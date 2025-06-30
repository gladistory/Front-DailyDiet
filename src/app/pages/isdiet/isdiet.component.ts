import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-isdiet',
  imports: [PrimaryButtonComponent, RouterLink],
  templateUrl: './isdiet.component.html',
  styleUrl: './isdiet.component.css'
})
export class IsdietComponent {

}
