import { Todo } from '@tensei/sdk'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import tensei from '../client'

export interface AddTodoInterface {
    modal?: boolean;
    toggle?: () => void;
    fetchTasks: () => void;
}

const AddTodo: React.FunctionComponent<AddTodoInterface> = ({ modal, toggle, fetchTasks } ) => {

    const [todo, setTodo] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        if(name === 'todo') {
            setTodo(value)
        } else {
            setDate(value)
        }
    }

    const handleAddTodo = () =>  {
        tensei.todos().insert({object: {
            title: todo,
            deadline: date,
        }}).then(() => fetchTasks())

        setDate('')
        setTodo('')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo List</ModalHeader>
                <ModalBody>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label className='form-label'>Add Todo</label>
                            <input 
                                type='text'
                                className='form-control' 
                                placeholder='Type in your todo'
                                name =  'todo' 
                                value= {todo}
                                onChange = {handleInputChange}
                            />

                            <label className='form-label mt-4'>Set a Deadline</label>
                            <input 
                                type='date' 
                                className='form-control mt-3' 
                                placeholder='Set task deadline'
                                name = 'date'
                                value= {date} 
                                onChange = {handleInputChange}
    />
                        </div>     
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={handleAddTodo}>Add Todo</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <div>
               
            </div>
        </>
    )
}

export default AddTodo