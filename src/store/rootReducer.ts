import {combineReducers, Reducer} from 'redux'
import indexReducer, {TPagesState} from "./reducers";

export interface TRootState {
    indexReducer: TPagesState
}

const rootReducer: Reducer<TRootState> = combineReducers({
    indexReducer,
});

export default rootReducer
