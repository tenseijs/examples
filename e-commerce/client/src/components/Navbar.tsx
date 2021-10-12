import React from 'react'
import { Link } from 'react-router-dom'

import { Product } from '../App'

type NavbarProp = {
    cartLists: Product[];
}

const Navbar:React.FunctionComponent<NavbarProp> = ({ cartLists }) => {
    
  const getCartTotal = (products: Product[]) => 
    products.reduce((ack: number, product) => ack + product.amount, 0 )

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand"></div>
            <div className="navbar-menu">
                <div className="navbar-start navbar-item is-size-4">
                    <b style={{color: "#fff"}}>Ice Cream</b>
                </div>

                <div className="navbar-end navbar-item is-size-2">
                <Link to="/cart"><i className="fa fa-shopping-cart" style={{color: "#fff"}}><sup>{getCartTotal(cartLists)}</sup></i></Link>
               
                </div>
            </div>
        </nav>
    )
}

export default Navbar
