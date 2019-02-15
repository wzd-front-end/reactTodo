import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import TodoItem from './todoItem'
import {toggleTodo, removeTodo} from '../actions'
import {selectVisibleTodos} from '../selector'


const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={onToggleTodo}
                        onRemove={onRemoveTodo}
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// 单个组件优化方法一：利用react-redux的connect方法，封装返回的组件类其实是包含shouldComponentUpdate生命周期的实现了，
// 只要prop不发生改变，是不会返回true，因为，我们只需要控制props属性值不发生一些没必要的更新即可减少组件的重新渲染，
// 这个就包括了传入值是对象的值的初始化，以及传入带参数的函数的初始化，因为带参数的函数实际是一个匿名函数，每次初始化都会产生一个新的函数，
// 导致prop一直是改变的，解决方法是把传参的步骤移入mapDispatchToProps()；
//方法二是：在父组件中，不传入任何的函数prop，而是由子组件内部自行dispatch对应的行为