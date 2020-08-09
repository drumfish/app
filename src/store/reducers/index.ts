import {Reducer} from 'redux';
import {
    PAGE_UPDATE_INDEX,
} from './indexActionTypes';

const initialState = {
    page: {
        index: 0,
    },
};

export interface TPagesState {
    page: {
        index: number;
    };
}

const indexReducer: Reducer<TPagesState> = (
    state = initialState,
    {type, payload}
) => {
    switch (type) {
        case PAGE_UPDATE_INDEX: {
            const {index} = payload;
            const prevPageState = state.page;
            return {...state, page: {...prevPageState, index}};
        }

        default:
            return state;
    }
};
export default indexReducer;