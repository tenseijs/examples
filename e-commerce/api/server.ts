import { auth } from '@tensei/auth'
import { graphql } from '@tensei/graphql'
import { welcome, tensei, cors, resource, text, textarea, integer } from '@tensei/core'

export default tensei()
  .root(__dirname)
  .resources([
    resource('Product')
    .fields([
      text('Image'),
      text('Name'),
      text('Price'),
      textarea('Description'),
      integer('Quantity')
    ])
  ])
  .plugins([
    welcome(), 
    auth().plugin(), 
    graphql().plugin(), 
    cors()
  ])
  .start()
  .catch(console.error)
