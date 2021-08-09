import {  gql } from 'graphql-request'

export const Todos = gql`
    query todos {
        todos {
            id
            title
            createdAt
        }
    }
`
