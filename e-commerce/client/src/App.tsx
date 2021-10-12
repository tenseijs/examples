import React from 'react';

import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

import { useQuery } from 'react-query';

export type Product = {
  id: number;
  image: string
  name: string
  price: number
  description: string
  amount: number
}

const endpoint = 'http://localhost:8810/graphql'
const PRODUCTS_QUERY = `
  {
    products {
      id
      image
      name
      price
      description
    }
  }
`

const fetchProducts = () => {
  return fetch(endpoint, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: PRODUCTS_QUERY})
  })
  .then((response) => {
    if(response.status >= 400) {
      throw new Error("Error fetching data")
    } else {
      return response.json()
    }
  })
  .then((data) => data.data.products)
}

const App = () => {
  const [cartLists, setCartLists] = useState<Product[]>([])
  const { data, isLoading, error } = useQuery<Product[]>('products', fetchProducts)

  if(isLoading){
    return <div className='box'>Loading...</div>
  }
  if(error){
      return <div>Error!</div>
  }

  console.log(data)

  const handleAddToCart = (clickedProduct: Product) => {
    setCartLists(prevItem => {
      const isItemInCart = prevItem.find(item => item.id === clickedProduct.id)

      if(isItemInCart) {
        return prevItem.map(item => 
          item.id === clickedProduct.id ? { ...item, amount: item.amount + 1} : item
        )
      }

      return [...prevItem, {...clickedProduct, amount: 1}]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartLists(prevItem => (
      prevItem.reduce((ack, item) => {
        if(item.id === id) {
          if(item.amount === 1) return ack;
          return [ ...ack , { ...item, amount: item.amount - 1}]
        } else {
          return [...ack, item]
        }
      }, [] as Product[])
    ))
  } 

  return (
    <Router>
        <Navbar cartLists={cartLists} />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <div className="column columns is-multiline">
                {data?.map(product => (
                  <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>  
          </Route>
          <Route path="/cart">
            <Cart cartLists={cartLists} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
