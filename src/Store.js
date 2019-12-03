import {createStore} from 'redux';
import {combineReducers, applyMiddleware, compose} from './learning/learn-redux'
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
// 貌似由于chrome扩展插件直接访问redux获取数据，所以当我更换为自己所写的createStore的时候是报错的
const storeEnhancers = compose(
    applyMiddleware(...middleWares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
console.log(win.devToolsExtension)

export default createStore(reducer, {}, storeEnhancers);
