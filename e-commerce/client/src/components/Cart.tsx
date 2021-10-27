import React from "react";

import StripeCheckout from "react-stripe-checkout";

import { Link } from "react-router-dom";
import { CartItem } from "../App";
import { Product } from "../generated";

import CartItems from "./CartItems";

type CartProps = {
  cartItems: CartItem[];
  onAddToCart: (clickedProduct: Product) => void;
  onRemoveFromCart: (id: number) => void;
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

  const getStripeTotal = (products: CartItem[]) =>
    products.reduce(
      (accumulator: number, product) =>
        accumulator + product.quantity * Number(product.product.price) * 100,
      0
    );

  const onToken = (token: any) => {
    console.log(token);
  };

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
        {cartItems.length === 0 ? null 
          : ( 
          <div>
            <h2 className="text-lg text-gray-700 font-semibold" style={{ position: "absolute", right: "495px" }}>Total</h2>
            <h2 className="text-lg text-gray-700 font-semibold" style={{ position: "absolute", right: "180px" }}> ${getTotal(cartItems)}</h2>
            <p className="text-sm font-thin float-right mt-8 mr-20">Shipping and taxes will be calculated at checkout.</p>
          </div>
        )}
        <br /><br /><br />
        {cartItems.length === 0 ? null : (
          <span className="float-right">
            <StripeCheckout
              label="Checkout"
              name="The Ice Cream Shop"
              billingAddress
              shippingAddress
              description={`Your total is $${getTotal(cartItems)}`}
              amount={getStripeTotal(cartItems)}
              panelLabel="Pay Now"
              token={onToken}
              stripeKey="pk_test_51JjsxtJnZnb1n2GnfjKt0Q0Qt34aNbuKJYhirnowSUtgAP6ufkdm2WUBsOuBGbBxveHs1X0IjT2tW9NGRmadEGBv00EUGy3gSa"
            />
          </span>
        )}
      </div>
    </>
  );
};

export default Cart;
