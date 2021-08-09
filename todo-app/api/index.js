const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { rest } = require('@tensei/rest')
const { media } = require('@tensei/media')
const { tensei, welcome, cors, resource, text } = require('@tensei/core')

tensei()
    .root(__dirname)
    .resources([
        resource('Todo')
            .fields([
                text('Title')
            ])
    ])
    .plugins([
        welcome(),
        cms().plugin(),
        media().plugin(),
        auth().plugin(),
        rest().plugin(),
        cors()
    ])
    .start()
    .catch(console.error)
