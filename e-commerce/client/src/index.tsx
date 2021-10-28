import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Elements stripe={loadStripe('pk_test_51JjsxtJnZnb1n2GnfjKt0Q0Qt34aNbuKJYhirnowSUtgAP6ufkdm2WUBsOuBGbBxveHs1X0IjT2tW9NGRmadEGBv00EUGy3gSa')}>
      <App />
    </Elements>
  </QueryClientProvider>,
  document.getElementById("root")
);
