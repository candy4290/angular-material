import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Quote } from '../../domain/quote.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/quote.action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    quote1 = {
      cn: '海阔凭鱼跃，天高任鸟飞'
    };
    quote$: Observable<Quote>;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private store$: Store<fromRoot.State>) {
                  this.quote$ = this.store$.select(state => state.quote.quote);
                  if (this.quote1.cn) {
                    const temp: Quote = {
                      cn: '海阔凭鱼跃，天高任鸟飞',
                      pic: 'assets/img/lz1.jpg',
                      en: ' ddfas asfd by the follies of asf'
                    };
                    this.store$.dispatch(new actions.LoadSuccessAction(temp)); // 触发action并传过去payload
                  }
    }

    goRegister() {
      this.router.navigate(['../register'], {relativeTo: this.route});
    }
}
