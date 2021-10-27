import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../App";

//import logo from "../images/logo.png"
//console.log(logo)

type NavbarProp = {
  cartItems: CartItem[];
};

const Navbar: React.FunctionComponent<NavbarProp> = ({ cartItems }) => {
  const getCartTotal = (products: CartItem[]) =>
    products.reduce(
      (accumulator: number, product) => accumulator + product.quantity,
      0
    );

  return (
    <div className="flex justify-between mr-20 mt-6">
      <h1 className="text-xl text-gray-700">The Ice Cream Shop</h1>
      <div className="text-2xl text-indigo-400">
        <Link to="/cart">
          <i className="fa fa-shopping-cart">
            <sup>{getCartTotal(cartItems)}</sup>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
