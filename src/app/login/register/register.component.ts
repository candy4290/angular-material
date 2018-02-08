import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  items: string[];
  form: FormGroup;
  constructor(private router: Router,
              private route: ActivatedRoute) {
                // this.form = this.fb.group({
                //   email: [],
                //   name: [],
                //   password: [],
                //   repeat: []
                // });
               }

  ngOnInit() {
    const nums = [1, 2, 3, 4, 5];
    this.items = nums.map(d => `avatar${d}`);

  }

  goLogin() {
    this.router.navigate(['./login'], {relativeTo: this.route.parent});
  }

  onsubmit(value: any, valid: any, ev: Event) {
    ev.preventDefault();
    if (!value) {
      return;
    }
    console.log(value);
  }

}
