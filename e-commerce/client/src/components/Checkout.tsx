import { Redirect } from "react-router-dom";

import {
  FunctionComponent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartItem } from "../App";
import { useCreatePaymentIntentMutation } from "../generated";

interface CheckoutProps {
  cartItems: CartItem[];
  clearCart: () => void;
}

export const Checkout: FunctionComponent<CheckoutProps> = ({
  cartItems,
  clearCart,
}) => {
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState<null | string>();
  const [succeeded, setSucceeded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { mutateAsync } = useCreatePaymentIntentMutation({
    endpoint: "http://127.0.0.1:8810/graphql",
    fetchParams: {
      headers: {
        "Content-type": "application/json",
      },
    },
  });

  const createPaymentIntent = async () => {
    if (cartItems.length === 0) {
      return;
    }

    const response = await mutateAsync({
      productCartItems: cartItems.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    });

    setClientSecret(response.createPaymentIntent);
  };

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    // show a loading state so user knows what is going

    setProcessing(true);

    const payload = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements?.getElement(CardElement)!,
      },
    });

    // check payload status
    if (payload?.error) {
      setError(`Payment Failed`);
      setProcessing(false);
    } else {
      // if succedded, redirect to thank you page
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setRedirect(true);
      clearCart();
    }
    // if failed, show the error
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  return (
    <>
      <form id="payment-form" onSubmit={onSubmit}>
        <div className="max-w-sm mt-12 p-6 bg-white border border-gray-200 shadow-sm">
          <CardElement id="checkout" onChange={console.log} />
        </div>

        <button
          className="mt-3 rounded-sm bg-blue-500 hover:bg-green-600 px-3 py-2 text-white"
          disabled={processing}
        >
          <span>{processing ? <div>Processing...</div> : "Pay now"}</span>
        </button>
      </form>
      {error ? <div className="text-red-500 font-bold">Payment Failed!</div>: null}

      {succeeded && redirect ? (
        <>
          <Redirect push to="/payment-success" />
        </>
      ) : null}
    </>
  );
};
