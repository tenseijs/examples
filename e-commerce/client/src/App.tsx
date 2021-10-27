import React from "react";

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Product, ProductsQuery, useProductsQuery } from "./generated";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

export interface CartItem {
  product: Product;
  quantity: number;
}

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { data, isLoading, error } = useProductsQuery<ProductsQuery>({
    endpoint: "http://127.0.0.1:8810/graphql",
    fetchParams: {
      headers: { "Content-Type": "application/json" },
    },
  });

  if (isLoading) {
    return <div className="box">Loading...</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  const onAddToCart = (clickedProduct: Product) => {
    const findProductItem = cartItems.find(
      (item) => item.product.id === clickedProduct.id
    );

    if (findProductItem) {
      const newItems = cartItems.map((item) => {
        if (item.product.id === clickedProduct.id) {
          return {
            product: findProductItem.product,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
      setCartItems(newItems);
    } else {
      const newItem = {
        product: clickedProduct,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const onRemoveFromCart = (id: number) => {
    setCartItems((findProductItem) =>
      findProductItem.reduce((accumulator, item) => {
        const itemId = parseInt(item.product.id);
        if (itemId === id) {
          if (item.quantity === 1) return accumulator;
          return [...accumulator, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...accumulator, item];
        }
      }, [] as CartItem[])
    );
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
          <Router>
            <Navbar cartItems={cartItems} />
            <Switch>
              <Route exact path="/">
                <div className="flex-grow">
                  <div>
                    <div className="m-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-8">
                      {data?.products?.map((product) => {
                        if (!product) {
                          return null;
                        }
                        return (
                          <ProductCard
                            key={product?.id}
                            product={product}
                            onAddToCart={onAddToCart}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Route>
              <Route path="/cart">
                <Cart
                  cartItems={cartItems}
                  onAddToCart={onAddToCart}
                  onRemoveFromCart={onRemoveFromCart}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
