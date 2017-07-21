import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../containers/Footer'

const App = () => (
  <div>
    <h1>TODO</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App