import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

const TodoItem = ({onToggleItem, onRemoveItem, completed, text}) => {

  return (
    <li
      className="todo-item" onClick={onToggleItem}>
      <input type="checkbox" className="toggle" readOnly checked={completed}/>
      <label className="text" style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </label>
      <button className="remove" onClick={onRemoveItem}>×</button>
    </li>
  )
}
TodoItem.propTypes = {
  onToggleItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleItem: () => ownProps.onToggle(ownProps.id),
  onRemoveItem: () => ownProps.onRemove(ownProps.id)
})

export default connect(null, mapDispatchToProps)(TodoItem);
