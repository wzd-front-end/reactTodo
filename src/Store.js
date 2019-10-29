import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'

import {reducer as todoReducer} from './demo1/todos';
import {reducer as filterReducer} from './demo1/filter';
import {reducer as weatherReducer} from './demo4/weather_redux'


// import Perf from 'react-addons-perf';
const win = window;
// win.Perf = Perf;


const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    weather: weatherReducer
});

const middleWares=[thunkMiddleware];
if(process.env.NODE_ENV !=='production'){
    middleWares.push(require('redux-immutable-state-invariant').default())
}

const storeEnhancers = compose(
    applyMiddleware(...middleWares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
