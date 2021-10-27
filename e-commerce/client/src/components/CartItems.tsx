import React from "react";

import { CartItem } from "../App";
import { Product } from "../generated";

type CartItemProps = {
  cartItem: CartItem;
  onAddToCart: (clickedProduct: Product) => void;
  onRemoveFromCart: (id: number) => void;
};

const CartItems: React.FunctionComponent<CartItemProps> = ({
  cartItem,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const getCartItemPrice = Number(cartItem.product.price);
  return (
    <>
      <div className="border bg-gray-100 bg-opacity-50 hover:shadow-lg shadow-md">
        <div>
          <div className="flex ml-12 mt-8">
            <div className="rounded-lg pt-2 pb-2 w-1/6">
              <div>
                <img
                  className="shadow-md border-1 rounded-lg"
                  src={`${cartItem.product.image}`}
                />
              </div>
            </div>
            <div>
              <h4 className="mt-1 ml-10 font-bold text-lg leading-tight truncate text-gray-700 ">
                {cartItem.product.name}
              </h4>
              <div className="mt-2 ml-10 text-base font-thin text-gray-700">
                {cartItem.product.description}
              </div>
            </div>
            <div className="absolute right-60 text-red-500 border px-1 border-1 border-solid">
              <button
                onClick={() => onRemoveFromCart(parseInt(cartItem.product.id))}
              >
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div>
            <div style={{ position: "absolute", right: "400px" }}>
              <p className="mb-1 text-sm text-gray-700 font-thin">Quantity</p>
              <div className="flex border border-2 px-2 py-2 bg-gray-100">
                <button
                  className="ml-2 mr-2 text-gray-400"
                  onClick={() =>
                    onRemoveFromCart(parseInt(cartItem.product.id))
                  }
                >
                  -
                </button>
                <p className="ml-2 mr-2 text-gray-700">{cartItem.quantity}</p>
                <button
                  className="ml-2 mr-2 text-indigo-500"
                  onClick={() => onAddToCart(cartItem.product)}
                >
                  +
                </button>
              </div>
            </div>
            <h1 className="mt-2 text-md font-semibold text-gray-700 float-right mr-8">
              ${cartItem.product.price}
            </h1>
          </div>
       
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default CartItems;
