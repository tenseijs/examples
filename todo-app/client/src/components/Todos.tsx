import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '@tensei/sdk'

interface TodosInterface {
    todos: Todo[];
    onDelete: (todo: Todo) => void;
}

const Todos: React.FunctionComponent<TodosInterface> = ({ todos, onDelete }) => {
    
    return (
        <div>    
           {todos.map((todo: Todo, index: number) => <TodoItem key={index} todo={todo} onDelete={onDelete} />)}
        </div> 
    )
}

export default Todos