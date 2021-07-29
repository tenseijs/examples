import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Todo } from '@tensei/sdk'

interface TodoItemProps {
    todo: Todo;
    onDelete: (todo: Todo) => void;
    onClick?: React.MouseEvent<HTMLButtonElement>;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({ todo, onDelete }) => {

    return (
        <div className = 'text-wrapper'>
            <h3 style={{marginTop: '5px'}}>{todo.title}</h3>
            <p style={{marginTop: '12px'}}>{new Date(todo.deadline).toDateString()}</p>
            <FaTrashAlt 
                onClick={() => onDelete(todo)} 
                style = {{fontSize: '15px', color: '#c91e1f', cursor: 'pointer'}} 
            />          
        </div>
    )
}

export default TodoItem


