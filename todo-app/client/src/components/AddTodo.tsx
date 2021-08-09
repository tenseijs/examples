import React, { useState } from 'react'
import tensei from '../client'

export interface AddTodoInterface {
    fetchTodos: () => void;
}


const AddTodo: React.FunctionComponent<AddTodoInterface> = ({ fetchTodos }) => {
    const [todo, setTodo] = useState<string>('')
    const [submitted, setSubmitted] = useState(false) //state for showing Task added
    const [error, setError] = useState(false) //state for showing the error

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
        } else {
            setError(true)
            setSubmitted(false)
        }
        
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(todo) {
            setError(false)
        }
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
                                 {error ? <p className="help is-danger">Todo is required</p> : null }
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
