import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_payment_Geteway_PK);
const Paymenth = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    )
}

export default Paymenth