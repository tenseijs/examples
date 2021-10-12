import React from 'react'
import { Link } from 'react-router-dom'

import CartList from '../components/Cartlist'

import { Product } from '../App'

type CartProp = {
    cartLists: Product[];
    handleAddToCart: (clickedProduct: Product) => void
    handleRemoveFromCart: (id: number) => void
}

const Cart:React.FunctionComponent<CartProp> = ({ cartLists, handleAddToCart, handleRemoveFromCart }) => {
    const getTotal = (products: Product[]) => 
        products.reduce((ack: number, product) => ack + product.amount * product.price, 0 )

    return (
        <div>
            <h1 className="title has-text-centered is-4 mt-2">Cart Summary</h1>
            <Link to="/"><i className="fa fa-arrow-left ml-3" aria-hidden="true"></i> Back to Products</Link>
            {cartLists.length === 0 ? <h1 className="title has-text-centered mt-6 is-6">Your Cart is Empty!</h1> : null} 
            {cartLists.map((item) => (
                <CartList key={item.id} cartItem={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
            ))}    
            {cartLists.length === 0 ? null : <h2 className="tag is-primary is-large ml-6 mt-6">Total: ${getTotal(cartLists)}</h2>}
        </div>
    )
}

export default Cart
