import {  gql } from 'graphql-request'

export const DeleteTodo = gql`
    mutation deleteTodo($id: ID!) {
        deleteTodo(id: $id) {
            id
        }
    }
`
