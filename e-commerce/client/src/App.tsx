import React from "react";

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Product,
  ProductsDocument,
  ProductsQuery,
  useProductsQuery,
} from "./generated";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { Checkout } from "./components/Checkout";
import PaymentSuccessful from "./components/PaymentSuccessful";

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

  const onAddToCart = (product: Product) => {
    const findProductItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (findProductItem) {
      const newItems = cartItems.map((item) => {
        if (item.product.id === product.id) {
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
        product: product,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const onRemoveFromCart = (product: Product) => {
    const findProductItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (findProductItem?.quantity === 1) {
      const deleteItem = cartItems.filter((item) => item.product.id !== product.id)
      setCartItems(deleteItem);
    } else {
      if (findProductItem) {
        const newItem = cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: findProductItem.product,
              quantity: item.quantity - 1,
            };
          }

          return item;
        });
        setCartItems(newItem);
      }
    }
  };

  const clearCart = () => setCartItems([]);

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
          <Router>
            {/*<Navbar cartItems={cartItems} />*/}
            <Switch>
              <Route exact path="/">
                <Navbar cartItems={cartItems} />
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
              <Route path="/checkout">
                <Navbar cartItems={cartItems} />
                <Checkout cartItems={cartItems} clearCart={clearCart} />
              </Route>
              <Route path="/payment-success">
                <PaymentSuccessful />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
