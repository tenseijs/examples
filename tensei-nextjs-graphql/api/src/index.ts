import { auth } from '@tensei/auth'
import { graphql } from '@tensei/graphql'
import { welcome, tensei, cors, resource, text } from '@tensei/core'

export default tensei()
  .root(__dirname)
  .resources([
    resource('Todo')
      .fields([
        text('Title').rules('required', 'max:255')
      ])
  ])
  .plugins([welcome(), auth().plugin(), graphql().plugin(), cors()])
  .start()
  .catch(console.error)
