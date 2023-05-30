import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'tda-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private supabaseService: SupabaseService) {
  }

  handleLogin(user: string, pass: string, e?: KeyboardEvent) {
    if (e && e?.key !== 'Enter') {
      return;
    }

    this.supabaseService.signIn(user, pass).then(({ data, error }) => {
      if (error) {
        alert(error);
      }
    });
  }

}
