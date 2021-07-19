const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { rest } = require('@tensei/rest')
const { media } = require('@tensei/media')
const { tensei, welcome, resource, text, array } = require('@tensei/core')

tensei()
    .root(__dirname)
    .resources([
        resource('TaskLists')
            .fields([
                text('Tasks'),
                array('Deadline').of('string')
            ]),
    ])
    .plugins([
        welcome(),
        cms().plugin(),
        media().plugin(),
        auth().plugin(),
        rest().plugin()
    ])
    .start()
    .catch(console.error)
