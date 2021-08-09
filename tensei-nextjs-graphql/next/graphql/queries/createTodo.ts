import {  gql } from 'graphql-request'

export const CreateTodo = gql`
    mutation createTodo($title: String!) {
        createTodo(object: { title: $title }) {
            id
            title
            createdAt
        }
    }
`
