import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.css'],
})
export class LayoutComponentComponent {
  user:any;

  constructor(private AS: AuthService, private router:Router) {
     this.AS.getUserClaims().then((a)=>{
      this.user = a;
      console.log("in layout constructor")
      console.log(this.user.displayName)
     })
  }

  logout() {
    this.AS.doLogout().then(() => {
      this.successRedirect();
    });
  }
  successRedirect() {
      this.router.navigate(['/']);
  }
}
