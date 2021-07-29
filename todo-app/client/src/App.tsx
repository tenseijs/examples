import React, { useState, useEffect } from 'react'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import { Todo } from '@tensei/sdk'
import tensei from './client'


const App: React.FunctionComponent = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal);

  const [todos, setTodos] = useState<Todo[]>([])

  const fetchTasks = () => {
    tensei.todos().findMany().then(todos => {
      // @ts-ignore
      setTodos(todos.data.data)
      console.log(todos.data)
    })
  }

  // Delete Todos
  const deleteHandler = (todo: Todo) => {
    tensei.todos().delete({
      id: todo.id,
    }).then(() => fetchTasks())
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
      <div className = 'App'>
          <div className='header'>
              <h2>Todo Lists</h2>
              <button className='btns' onClick={() => setModal(true)}>Add Todo</button>
          </div>

          <AddTodo modal={modal} toggle={toggle} fetchTasks={fetchTasks} />
          <Todos todos={todos} onDelete={deleteHandler} />

      </div>    
  ) 
}

export default App
