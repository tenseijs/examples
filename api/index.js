const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { rest } = require('@tensei/rest')
const { media } = require('@tensei/media')
const { tensei, welcome, cors } = require('@tensei/core')

tensei()
  .root(__dirname)
  .plugins([
    welcome(),
    cms().plugin(),
    media().plugin(),
    auth()
      .refreshTokens()
      .social('github', {
        key: 'f5288301f95205c27c80', // Use process.env in production
        secret: '8048976af848ada6d917b4ec92883c8b2c01c8c7', // Use process.env in production
        scope: ['user', 'user:email'],
        clientCallback: 'http://localhost:3000' // Use process.env in production
      })
      .plugin(),
    rest().plugin(),
    cors()
  ])
  .start()
  .catch(console.error)
