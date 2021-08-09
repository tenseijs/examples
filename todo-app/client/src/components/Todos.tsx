import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '@tensei/sdk'

interface TodosInterface {
    todos: Todo[];
    onDelete: (todo: Todo) => void;
}

const Todos: React.FunctionComponent<TodosInterface> = ({ todos, onDelete }) => {
    console.log(todos)
    return (     
        <>
            <div className="box">
                <h1 className="title">Todo Lists</h1>
                <table className="table is-bordered is-striped is-narrow is-fullwidth">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Title</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo:Todo, index: number) => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} serialNumber={index} />)}
                    </tbody>
                </table>
            </div>
      </>
    )
}

export default Todos
