import React from "react";

import { Link } from "react-router-dom";
import { CartItem } from "../App";
import { Product } from "../generated";

import CartItems from "./CartItems";

type CartProps = {
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
};

const Cart: React.FunctionComponent<CartProps> = ({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const getTotal = (products: CartItem[]) =>
    products.reduce(
      (accumulator: number, product) =>
        accumulator + product.quantity * Number(product.product.price),
      0
    );

  return (
    <>
      <div>
        <div className="font-thin mt-8">
          <Link to="/">
            <i
              className="fa fa-long-arrow-left ml-6 mr-2 text-indigo-400"
              aria-hidden="true"
            ></i>{" "}
            Continue shopping
          </Link>
        </div>
        <h1 className="-mt-6 text-center text-lg font-bold">Cart summary</h1>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="text-center">Your Cart is Empty!</h1>
      ) : null}
      <div className="flex-grow">
        <div>
          <div className="m-4 grid grid-cols-1 gap-6 mt-8">
            {cartItems.map((item) => (
              <CartItems
                key={item.product.id}
                cartItem={item}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        {cartItems.length === 0 ? null : (
          <div>
            <h2
              className="text-lg text-gray-700 font-semibold"
              style={{ position: "absolute", right: "495px" }}
            >
              Total
            </h2>
            <h2
              className="text-lg text-gray-700 font-semibold"
              style={{ position: "absolute", right: "180px" }}
            >
              {" "}
              ${getTotal(cartItems)}
            </h2>
          </div>
        )}
        <br />
        <br />
        <br />
        {cartItems.length === 0 ? null : (
          <span className="float-right">
            <Link to="/checkout">
              <div style={{ width: "370px"}} className="flex border border-gray-200 d hover:shadow-lg border-2 item-center px-8 py-3 font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                <p className="ml-16">Checkout</p>
                <i
                  className="fa fa-long-arrow-right font-semibold ml-20 mt-2 text-white float-right"
                  aria-hidden="true"
                ></i>
              </div>
            </Link>
          </span>
        )}
      </div>
    </>
  );
};

export default Cart;
