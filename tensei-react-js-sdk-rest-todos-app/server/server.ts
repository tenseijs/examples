import { welcome, tensei, cors , resource, text, boolean} from '@tensei/core'
import { rest } from '@tensei/rest'



export default tensei()
  .root(__dirname)
  .resources([resource('Todo').fields([text('Title'), boolean('Complete Status').default(false)])])
  .plugins([welcome(), rest().plugin(), cors()])
  .start()
  .catch(console.error)
