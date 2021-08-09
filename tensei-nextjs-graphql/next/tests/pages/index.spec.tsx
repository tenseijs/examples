import React from 'react'
import {render} from '@testing-library/react'
import Home, {  getServerSideProps } from '../../pages/index'

import {sdk} from '../../graphql/client'
import { TodosQuery } from '../../graphql/types'

describe('The home page', () => {
    it('getServerSideProps returns the correct list of todos from the api', async () => {
        const TEST_TODOS: TodosQuery['todos'] = [{
            id: '1',
            title: 'Learn vue'
        }]

        jest.spyOn(sdk, 'todos').mockImplementation(async () => ({
            todos: TEST_TODOS
        }))

        const response = await getServerSideProps({} as any)

        expect(sdk.todos).toHaveBeenCalled()
        expect(response).toEqual({
            props: {
                todos: {
                    todos: TEST_TODOS
                }
            }
        })
    })
    it('Home page renders initial todos correctly', () => {
        const TEST_TODOS: TodosQuery['todos'] = [{
            id: '1',
            title: 'Learn vue'
        }, {
            id: '2',
            title: 'Master react'
        }]

        const { getByTestId, debug } = render(<Home todos={{ todos: TEST_TODOS }} />)

        TEST_TODOS.forEach(todo => {
            const todoItem = getByTestId(`todo-${todo?.id}`)

            expect(todoItem.textContent).toContain(todo?.title)
        })
    })
})
