import { rest } from '@tensei/rest'
import { tensei, cors, route } from '@tensei/core'
import BookResource from './resources/Book'


export default tensei()
  .root(__dirname)

  // Configure database
  .databaseConfig({
    type: 'sqlite',
    dbName: 'book-directory'
  })

  // Register resources
  .resources([
    BookResource
  ])

  // Register plugins
  .plugins([

    rest()
      // .basePath('api/v1')
      .plugin(),

    cors()
  ])

  // A custom welcome endpoint for the API
  .routes([
    route('Welcome')
    .get()
    .path('/')  
    .handle((req, res) => {
      res.send('Welcome to Tensei Book Directory API')
    })
  ])

  // Start the server
  .start()

  // Catch errors on the server
  .catch(console.error)
