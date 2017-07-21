import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let inputNode;

  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        if (!inputNode.value.trim()) {
          return
        }
        dispatch(addTodo(inputNode.value))
        inputNode.value = ''
        inputNode.focus()
       }}>
        <input ref={node => {inputNode = node}}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo