import { AnyAction, combineReducers, createStore } from 'redux';

const reducers = combineReducers({

});

const rootReducer = (state: any, action: AnyAction) => {
    return reducers(state, action);
};

let store = createStore(rootReducer);
export default store;
