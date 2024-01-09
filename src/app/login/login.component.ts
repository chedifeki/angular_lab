import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  /**
   *
   */
  constructor(private AuthService:AuthService, private ngZone: NgZone, private router:Router) {
    
  }
  signIn() {
    this.AuthService.doGoogleLogin().then( () => {
      this.successRedirect();
    })
  }
  successRedirect() {
    this.ngZone.run( () => {
      this.router.navigate(['/members'])
    })
  }

}
