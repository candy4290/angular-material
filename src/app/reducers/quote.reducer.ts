import * as actions from '../actions/quote.action';
import { Quote } from '../domain/quote.model';


export interface State {
    quote: Quote;
}

export const initialState: State = {
    quote: {
        cn: '---------------------------------',
        pic: 'assets/img/photo1.jpg',
        en: ' Learn wisdom by the follies of others',
    }
};

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.LOAD_SUCCESS: {
            return {
                ...state, quote: <Quote>action.payload
            };
        }
        case actions.ActionTypes.LOAD_FAIL:
        default: {
            return state;
        }
    }
}

export const getQuote = (state: State) => state.quote;
