import React from "react";
import { Link } from "react-router-dom";


/*type NavbarProp = {
  cartItems: Product[];
}*/

const Navbar: React.FunctionComponent = () => {
  /*const getCartTotal = (products: Product[]) =>
    products.reduce((accumulator: number, product) => accumulator + product.amount, 0)*/

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand"></div>
      <div className="navbar-menu">
        <div className="navbar-start navbar-item is-size-4">
          <b style={{ color: "#fff" }} className="is-italic has-text-weight-light">The Ice Cream Shop</b>
        </div>

        <div className="navbar-end navbar-item is-size-2">
          <Link to="/cart">
            <i className="fa fa-shopping-cart" style={{ color: "#fff" }}>
              <sup>0</sup>
            </i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
