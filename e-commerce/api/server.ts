import { Stripe } from 'stripe'
import { auth } from '@tensei/auth'
import { graphql } from '@tensei/graphql'
import { welcome, tensei, cors, resource, text, textarea, integer, graphQlQuery } from '@tensei/core'

const stripe = new Stripe('sk_test_51JjsxtJnZnb1n2GnbebKQgYe73xTZtT1147z1dLFU9CGmkfbZKvcrW1VX4jA10Wav82slFIGjp9AW6puPURjibMP00z7Fw14Em', {
  apiVersion: '2020-08-27'
})

interface ProductCartItem {
  productId: string
  quantity: number
}

export default tensei()
  .root(__dirname)
  .graphQlTypeDefs([`
    input ProductCartItem {
      productId: ID
      quantity: Int
    }

    extend type Mutation {
      createPaymentIntent(productCartItems: [ProductCartItem]!): String!
    }
  `])
  .graphQlQueries([
    graphQlQuery('Create payment intent')
      .path('createPaymentIntent')
      .mutation()
      .handle(async (src, args, ctx, info) => {
        const products = await ctx.repositories.products().find({
          id: {
            $in: ctx.body.productCartItems.map((item: ProductCartItem) => item.productId)
          }
        })

        const totalPrice = products.reduce((total, product)  => total + parseInt(product.price), 0)

        const paymentIntent = await stripe.paymentIntents.create({
          amount: totalPrice * 100,
          currency: 'usd'
        })

        return paymentIntent.client_secret
      })
  ])
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
