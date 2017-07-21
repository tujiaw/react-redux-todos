import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => {
      return <TodoItem key={todo.id} 
        {...todo} 
        onClick={() => onTodoClick(todo.id)} />
    })}
  </ul>
)

export default TodoList