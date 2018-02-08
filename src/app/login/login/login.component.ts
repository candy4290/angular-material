import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    goRegister() {
      this.router.navigate(['../register'], {relativeTo: this.route});
    }
}
