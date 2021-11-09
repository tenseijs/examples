import { welcome, tensei, cors , resource, text} from '@tensei/core'
import { rest } from '@tensei/rest'



export default tensei()
  .root(__dirname)
  .resources([resource('Todolist').fields([text('todo'), text('complete_status').default("false")])])
  .plugins([welcome(), rest().plugin(), cors()])
  .start()
  .catch(console.error)
