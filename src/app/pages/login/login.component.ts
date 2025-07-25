import { Component, inject } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
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
     if (!localStorage.getItem('sessionId')) {
        alert('Erro ao fazer login. Por favor, tente novamente.');
     } else {
       this.router.navigate(['/home']);
     }
    });
  }

}
