import { FunctionComponent, FormEventHandler, useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { CartItem } from '../App'
import { useCreatePaymentIntentMutation } from '../generated'

interface CheckoutProps {
    cartItems: CartItem[]
}

export const Checkout: FunctionComponent<CheckoutProps> = ({ cartItems }) => {
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const { mutateAsync } = useCreatePaymentIntentMutation({
        endpoint: 'http://127.0.0.1:8810/graphql',
        fetchParams: {
            headers: {
                'Content-type': 'application/json'
            }
        }
    })

    const createPaymentIntent = async () => {
        if (cartItems.length === 0) {
            return
        }

        const response = await mutateAsync({
            productCartItems: cartItems.map(item => ({
                productId: item.product.id,
                quantity: item.quantity
            }))
        })

        setClientSecret(response.createPaymentIntent)
    }

    const onSubmit: FormEventHandler = async (event) => {
        event.preventDefault()

        // show a loading state so user knows what is going

        const payload = await stripe?.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements?.getElement(CardElement)!
            }
        })

        // check payload status

        // if succedded, redirect to thank you page
        // if failed, show the error

    }

    useEffect(() => {
        createPaymentIntent()
    }, [])
    
    return (
        <form id='payment-form' onSubmit={onSubmit}>
            <div className='max-w-sm mt-12 p-6 bg-gray-200'>
                <CardElement id='checkout' onChange={console.log} />
            </div>

            <button className="mt-3 rounded-sm bg-green-500 hover:bg-green-600 px-3 py-2 text-white">
                Pay now
            </button>
        </form>
    )
}
