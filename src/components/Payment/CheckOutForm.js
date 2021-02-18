import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
export default function CheckOutForm({ amount, email, handleClose }) {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    // const amount = amount;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        // axios.post('/api/pay', { amount })
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         setClientSecret(data.clientSecret);
        //     });
    }, []);
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handlePay = async ev => {
        ev.preventDefault();
        setProcessing(true);
        console.log(amount);
        const request = await axios.post('/api/pay', { amount: amount, email: email })
        console.log(request);
        if (request != null) {

            setClientSecret(request.data);
            confirmPayment(request.data);
        } else {

            setError(`Payment failed`);
            setProcessing(false);
        }

    };
    const confirmPayment = (data) => {
        stripe.confirmCardPayment(`${data}`, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
            .then(payload => {

                setError(null);
                setProcessing(false);
                setSucceeded(true);
            })
            .catch(error => {

                setError(`Payment failed ${error.message}`);
                setProcessing(false);
            })
    }
    return (
        <div id="payment-form" >
            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
            <button
                disabled={processing || disabled || succeeded}
                id="submit"
                onClick={handlePay}
            >
                <span id="button-text">
                    {processing ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                            "Pay now"
                        )}
                </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}
            {/* Show a success message upon completion */}
            <p className={succeeded ? "result-message" : "result-message hidden"}>
                Payment succeeded, see the result in your
        <a
                    href={`https://dashboard.stripe.com/test/payments`}
                >
                    {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
        </div>
    );
}