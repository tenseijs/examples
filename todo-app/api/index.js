const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { rest } = require('@tensei/rest')
const { media } = require('@tensei/media')
const { cors } = require('@tensei/core')
const { tensei, welcome, resource, text, date } = require('@tensei/core')

tensei()
    .root(__dirname)
    .resources([
        resource('Todo')
            .fields([
                text('Title'),
                date('Deadline')
            ]),
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
