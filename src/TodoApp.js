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
            <Todos/>
            <Filter/>
            <CountDown startCount={10}>
                {
                    showCount
                }
            </CountDown>
        </div>
    )
}
export default TodoApp;