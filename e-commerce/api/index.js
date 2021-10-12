const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { media } = require('@tensei/media')
const { graphql } = require('@tensei/graphql')
const { tensei, welcome, cors, resource, text, textarea } = require('@tensei/core')

tensei()
  .root(__dirname)
  .resources([
    resource('Product')
    .fields([
      text('Image'),
      text('Name'),
      text('Price'),
      textarea('Description')
    ])
  ])
  .plugins([
    welcome(),
    cms().plugin(),
    media().plugin(),
    auth().plugin(),
    graphql().plugin(),
    cors()
  ])
  .start()
  .catch(console.error)
