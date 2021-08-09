import React from 'react'

import { Todo } from '@tensei/sdk'

interface TodoItemProps {
    todo: Todo;
    serialNumber: number;
    onDelete: (todo: Todo) => void;
    onClick?: React.MouseEvent<HTMLButtonElement>;
}

const TodoItem:React.FunctionComponent<TodoItemProps> = ({ todo, serialNumber, onDelete }) => {
    console.log(todo)
    return (
        <tr>
            <td>{serialNumber + 1}</td>
            <td>{todo.title}</td>
            <td>
                <button 
                    type="submit" 
                    className="button is-danger is-outlined"                  
                    onClick={() => onDelete(todo)} 
                >
                    <span>DELETE</span>
                </button>
            </td>
        </tr>
    )
}

export default TodoItem
