
// // Payment.js
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { useParams } from "react-router-dom";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//   const { amount } = useParams();
//   return (
//     <div className="h-screen p-3">
//       <Elements stripe={stripePromise}>
//         <CheckoutForm amount={amount} />
//       </Elements>
//     </div>
//   );
// };

// export default Payment;








import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  
     const { amount, name } = useParams();
     console.log("Received Amount:", amount); 
     console.log("Received Name:", name);

  
  return (
    <div className="h-screen p-3">
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} name={name} />
      </Elements>
    </div>
  );
};

export default Payment;
