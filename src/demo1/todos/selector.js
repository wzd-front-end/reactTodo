import {createSelector} from 'reselect/lib/index'
import {FilterTypes} from '../constants.js';

const getFilter = (state) => state.filter;
const getToods = (state) => state.todos;
export const selectVisibleTodos = createSelector([getToods, getFilter],
    (todos, filter) => {
        switch (filter) {
            case FilterTypes.ALL:
                return todos;
            case FilterTypes.COMPLETED:
                return todos.filter(item => item.completed);
            case FilterTypes.UNCOMPLETED:
                return todos.filter(item => !item.completed);
            default:
                throw new Error('unsupported filter');
        }
    }
)
