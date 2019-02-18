import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import * as serviceWorker from './serviceWorker';

import TodoApp from './TodoApp'
import Weather from './weather_react/view/weather'
import store from './Store'
import {view as CitySelector} from "./city_selector";
import {view as Weathers} from "./weather_redux";

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
        <div>
            <h2>例子三</h2>
            <Weather />
        </div>
        <div>
            <h2>例子四</h2>
            <CitySelector/>
            <Weathers/>
        </div>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
