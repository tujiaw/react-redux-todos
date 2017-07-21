import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  switch(state.visibleFilter) {
    case 'SHOW_ALL':
      return { todos: state.todos }
    case 'SHOW_COMPLETED':
      return { todos: state.todos.filter(t => t.completed ) }
    case 'SHOW_ACTIVE':
      return { todos: state.todos.filter(t => !t.completed ) }
    default:
      return {todos: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default VisibleTodoList