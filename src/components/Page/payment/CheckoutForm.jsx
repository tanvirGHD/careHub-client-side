import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAuth from "../../../hook/useAuth";
import moment from "moment";

const CheckoutForm = ({ amount, name }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate
  console.log("Received Amount:", amount);
  const total = parseInt(amount, 10) || 0;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: total })
      .then((res) => {
        console.log("intent ki pacce?", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.error("Payment Intent Creation Failed:", error);
      });
  }, [axiosSecure, total]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // Confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      },
    });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // Now save the payment in the database
        const payment = {
          email: user.email,
          transactionId: paymentIntent.id,
          price: total,
          date: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
          charityName: name,
          status: "success",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment save", res);

        // Navigate to home after successful payment
        navigate("/dashboard");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-5 border-amber-400 rounded-lg md:w-2/3 mx-auto mt-36">
      <h1 className="pb-5">
        <span className="font-bold">Amount:</span> ${amount}
      </h1>
      <h1 className="pb-10">
        <span className="font-bold">Charity Name: </span>
        {name}
      </h1>
      <div className="mb-6">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      <button
        className="w-full py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Donate Now
      </button>
      <p className="text-red-500 text-lg mt-3">{error}</p>
      {transactionId && <p className="mt-3 text-green-500">Your transaction id: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
