import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink  } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email: string = '';
  name: string = '';

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  register() {   if (!this.email || !this.name) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    this.authService.register(this.email, this.name).subscribe((res) => {
      localStorage.setItem('sessionId', res.sessionId);
      this.router.navigate(['/home']);
    }, (error) => {
      alert('Erro ao registrar. Tente novamente.');
    });
  }
}
