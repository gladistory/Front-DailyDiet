import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundary-button',
  imports: [],
  templateUrl: './secundary-button.component.html',
  styleUrl: './secundary-button.component.css'
})
export class SecundaryButtonComponent {

  @Input() textSecundaryButton: string = '';
  @Input() icon: string = '';

}
