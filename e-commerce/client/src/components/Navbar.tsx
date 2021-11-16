import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../App";

import logo from "../images/logo.png"

type NavbarProp = {
  cartItems: CartItem[];
};

const Navbar: React.FunctionComponent<NavbarProp> = ({ cartItems }) => {
  const getCartTotal = (cartItems: CartItem[]) =>
    cartItems.reduce(
      (accumulator: number, cartItem) => accumulator + cartItem.quantity,
      0
    );

  return (
    <div className="flex justify-between mr-20 mt-6">
      <Link to='/'><img src={logo} className="w-1/6" /></Link>
      <div className="text-2xl text-indigo-400">
        <Link to="/cart">
          <i className="fa fa-shopping-cart">
            <sup style={{fontFamily: "Monospace"}}>{getCartTotal(cartItems)}</sup>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
