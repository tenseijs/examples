import React, { useState } from 'react'
import tensei from '../client'

export interface AddTodoInterface {
    fetchTodos: () => void;
}


const AddTodo: React.FunctionComponent<AddTodoInterface> = ({ fetchTodos }) => {
    const [todo, setTodo] = useState<string>('')
    const [submitted, setSubmitted] = useState(false) //state for showing Task added

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setTodo(value)
    }

    //Add Todos
    const handleAddTodo = () => {
        if(todo !== '') {
            tensei.todos().insert({object: {
                title: todo,
            }}).then(() => fetchTodos())
            
            setSubmitted(true)
        } 
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTodo('')
    }

    return (

        <>
                <div className="box">
                    <h2 className="title">New Todo</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Todo title" 
                                    name="todo" 
                                    value={todo}
                                    onChange = {handleInputChange}
                                />
                            </div>
                            <div className="control">
                                <button type="submit" className="button is-primary" onClick={handleAddTodo}  >
                                    Add Todo
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {submitted ? <div className="notification is-success">Todo added!</div> : null}
        </>
    )
}

export default AddTodo
