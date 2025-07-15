import { Component, inject } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  private authService: AuthService = inject(AuthService);

  private router: Router = inject(Router);

  email: string = '';

  login() {
    if (!this.email) {
      alert('Por favor, preencha o campo de email.');
      return;
    }

    this.authService.login(this.email).subscribe((res) => {
     localStorage.setItem('sessionId', res.sessionId);
     this.router.navigate(['/home']);
    });
  }

}
