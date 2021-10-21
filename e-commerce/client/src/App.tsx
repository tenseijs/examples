import React from 'react'

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Product, ProductsQuery, useProductsQuery } from './generated'

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";


const App = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const { data, isLoading, error } = useProductsQuery<ProductsQuery>({
    endpoint : 'http://127.0.0.1:8810/graphql',
    fetchParams: {
      headers: { "Content-Type": "application/json" }
    }
  })

  if (isLoading) {
    return <div className="box">Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  const onAddToCart = (clickedProduct: Product) => {
    const findProduct = cartItems.find((item) => {
      item.id === clickedProduct.id
    })

    if(findProduct) {
      setCartItems(cartItems.map((item) => 
        item.id === clickedProduct.id
          ? {...findProduct, quantity: parseInt(findProduct.quantity) + 1 } : item
        )) 
        } else {
      setCartItems([...cartItems, { ...clickedProduct, quantity: 1 }])
      }
    }
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="column columns is-multiline">
              {data?.products?.map((product) => {
                if(!product) {
                  return null
                }
                return (
                  <ProductCard key={product?.id} product={product} />
                )
              })}
            </div>
          </div>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
