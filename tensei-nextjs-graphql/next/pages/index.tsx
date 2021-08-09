import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { SyntheticEvent, useState } from 'react'
import { sdk } from '../graphql/client'
import { Todo, TodosQuery } from '../graphql/types'

interface HomeProps {
  todos: TodosQuery
}

export default function Home(props: HomeProps) {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<TodosQuery['todos']>(props.todos.todos)

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    const response = await sdk.createTodo({
      title
    })

    setTodos([
      ...(todos || []),
      response.createTodo
    ])
  }

  const onDelete = async (id: Todo['id']) => {
    await sdk.deleteTodo({
      id
    })

    setTodos(todos?.filter(todo => todo?.id !== id))
  }

  return (
    <>
      <Head>
        <title>Next - Tensei Todos</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
      </Head>

      <div className="container mt-5">
        <h1 className='mb-5'>Todos Tracking</h1>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" id="title" placeholder="Add new todo" />
          </div>
        </form>

        <ul className="list-group">
          {todos?.map(todo => (
            <li key={todo?.id} data-testid={`todo-${todo?.id}`} className="list-group-item d-flex aign-items-center justify-content-between">
              {todo?.title}
              <button type="button" onClick={() => onDelete(todo?.id!)} className="btn btn-outline-danger btn-sm">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const todos = await sdk.todos() 

  return {
    props: {
      todos
    }
  }
}
