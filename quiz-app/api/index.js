const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { rest } = require('@tensei/rest')
const { media } = require('@tensei/media')
const { tensei, welcome, cors, resource, text, array } = require('@tensei/core')

tensei()
    .root(__dirname)
    .resources([
        resource('Quiz')
        .fields([
            text('Question'),
            array('Options').of('string'),
            text('Answer')
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
