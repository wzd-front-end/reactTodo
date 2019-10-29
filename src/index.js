import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './Store'

import {view as Todos} from './demo1/todos';
import {view as Filter} from './demo1/filter';
import {view as CountDown} from './demo2/countDown'
import Weather from './demo3/weather_react/view/weather'
import {view as CitySelector} from "./demo4/city_selector";
import {view as Weathers} from "./demo4/weather_redux";

function showCount(count) {
  return (<div>{count > 0 ? count : '新年快乐'}</div>)
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>例子一</h2>
      <Todos/>
      <Filter/>
    </div>

    <div>
      <h2>例子二</h2>
      <CountDown startCount={10}>
        {
          showCount
        }
      </CountDown>
    </div>

    <div>
      <h2>例子三</h2>
      <Weather/>
    </div>

    <div>
      <h2>例子四</h2>
      <CitySelector/>
      <Weathers/>
    </div>

  </Provider>,
  document.getElementById('root')
);
