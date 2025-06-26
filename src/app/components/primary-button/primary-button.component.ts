import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {

  @Input() textPrimaryButton: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;

}
