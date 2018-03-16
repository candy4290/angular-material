import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, toPayload, Effect } from '@ngrx/effects';
import * as actions from '../actions/quote.action';

@Injectable()
export class NameEffects {
    // @Effect() name$: Observable<Action> = this.actions$.ofType(actions.ActionTypes.LOAD)

    constructor(
        private actions$: Actions
    ) {}
}
