import React, { useState, useEffect } from 'react'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import { Todo } from '@tensei/sdk'
import tensei from './client'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  //Fetch Todos
  const fetchTodos = () => {
    tensei.todos().findMany().then(todos => {
      // @ts-ignore
      setTodos(todos.data.data)
    })
  }

  //Delete  Todos
  const handleDelete = (todo: Todo) => {
    tensei.todos().delete({
      id: todo.id,
    }).then(() => fetchTodos())
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <AddTodo fetchTodos={fetchTodos} />
              <Todos todos={todos} onDelete={handleDelete} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App

