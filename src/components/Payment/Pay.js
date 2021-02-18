import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import "./Pay.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
// Sign in to see examples pre-filled with your key.
const promise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
export default function Pay(props) {
  return (
    <div>
      <Elements stripe={promise}>
        <CheckOutForm amount={props.amount} email={props.email} handleClose={props.handleClose} />
      </Elements>
    </div>
  );
}