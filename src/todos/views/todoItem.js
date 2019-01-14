import React from 'react'
import PropTypes from 'prop-types';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    const checkedProp = completed ? {checked: true} : {};
    return (
        <li
            className="todo-item"
            style={{textDecoration: completed ? 'line-through' : 'none'}} onClick={onToggle}>
            <input type="checkbox" className="toggle" readOnly checked={completed}/>

            <label className="text">
                <button
                    type="button"
                    className="link-button"
                    >
                    {text}
                </button>
            </label>
            <button className="remove" onClick={onRemove}>×</button>
        </li>
    )
}
TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;