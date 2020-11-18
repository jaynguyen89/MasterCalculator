import { AnyAction, combineReducers, createStore } from 'redux';
import appDebugger from '../roots/debugger';

const reducers = combineReducers({

});

const rootReducer = (state: any, action: AnyAction) => {
    return reducers(state, action);
};

let store = createStore(rootReducer, appDebugger.createEnhancer!());
export default store;
