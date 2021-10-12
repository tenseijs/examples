import React from 'react'
import { Product } from '../App'

type ProductCardProp = {
    product: Product;
    handleAddToCart: (clickedProduct: Product) => void;
}

const ProductCard:React.FunctionComponent<ProductCardProp> = ({ product, handleAddToCart }) => {
    return (
                <div className="column is-half">
                    <div className="box">
                        <div className="media">
                            
                            <div className="media-content">
                                {product.name}
                                <br />
                                <span className="tag is-primary mt-2">${product.price}</span>
                                <div className="mt-2">{product.description}</div>
                                <div className="is-clearfix">
                                <button
                                    className="button is-primary is-pulled-left mt-3"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>
                                </div>
                            </div>

                            <div className="media-right">
                                <figure className="image is-128x128 is-flex is-align-items-center is-justify-content-center">
                                    <img
                                        src={product.image}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ProductCard
