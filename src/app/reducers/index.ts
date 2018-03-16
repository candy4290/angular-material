import { NgModule } from '@angular/core';
import { StoreModule, combineReducers, ActionReducer } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import * as fromQuote from './quote.reducer';
import { environment } from '../../environments/environment';
import { createSelector } from 'reselect';

export interface State {
         quote: fromQuote.State;
}

const initialState: State = {
        quote: fromQuote.initialState,
};

const reducers = {
    quote: fromQuote.reducer,
};

const productionReducers: ActionReducer<State> = combineReducers(reducers);
const developmentReducers: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
export function reducer(state = initialState, action: {type: any} ): State {
    return environment.production ? productionReducers(state, action) : developmentReducers(state, action);
}

export const getQuoteState = (state: State) => state.quote;
// export const getQuote = createSelector(getQuoteState, fromQuote.getQuote);

@NgModule({
    imports: [
        StoreModule.provideStore(reducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ],
})
export class AppStoreModule {}
