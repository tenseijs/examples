import { GraphQLClient } from 'graphql-request'
import { getSdk } from './types'

export const client = new GraphQLClient('http://localhost:8810/graphql')

export const sdk = getSdk(client)
