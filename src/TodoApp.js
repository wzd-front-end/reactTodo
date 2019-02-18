import React from 'react'
import {view as Todos} from './todos';
import {view as Filter} from './filter';
import {view as CountDown} from './countDown'

function showCount(count) {
    return (<div>{count > 0 ? count : '新年快乐'}</div>)
}

function TodoApp() {
    return (
        <div>
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

        </div>
    )
}
export default TodoApp;