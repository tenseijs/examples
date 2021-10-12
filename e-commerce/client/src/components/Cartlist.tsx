import React from 'react'

import { Product } from '../App'

type CartListProp = {
    cartItem: Product;
    handleAddToCart: (clickedProduct: Product) => void
    handleRemoveFromCart: (id: number) => void
}

const CartList:React.FunctionComponent<CartListProp> = ({ cartItem, handleAddToCart, handleRemoveFromCart }) => {
    return (
        <div className="container">
            <div className="column columns is-multiline">
                <div className="column">
                    <div className="box">
                        <div className="media">
                            
                            <div className="media-content">
                                {cartItem.name}
                                <br />
                                <p className="is-primary mt-2">Price: ${cartItem.price}</p>
                               <p className="mb-2 mt-2">Quantity</p>
                                <div className="button is-primary">
                                    <br />
                                    <button 
                                        className="button is-primary"
                                        onClick={() => handleRemoveFromCart(cartItem.id)}
                                    >
                                        -
                                    </button>
                                    <p className="pl-4 pr-4">{cartItem.amount}</p>
                                    <button  
                                        className="button is-primary" 
                                        onClick={() => handleAddToCart(cartItem)}
                                    >
                                        +
                                    </button>
                                </div>
                                <br /><br />
                                <p>Total: ${(cartItem.amount * cartItem.price)}</p>
                                <div className="is-clearfix">
                                
                                </div>
                            </div>
                            <div className="media-right">
                                <figure className="image is-128x128 is-flex is-align-items-center is-justify-content-center">
                                    <img
                                        src={cartItem.image}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartList
