import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseMenus from "../../hooks/UseMenus";
import UseAuth from "../../hooks/UseAuth";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axisoSecure = UseAxiosSecure();
    const { user } = UseAuth();
    const [menus] = UseMenus();
    const totalPrice = menus.reduce((total, item) => total + item.Price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axisoSecure.post('/create-payment-intent', { Price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axisoSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.
            confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    Price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: menus.map(item => item._id),
                    menuItemIds: menus.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axisoSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                if(res.data?.paymentResult?.insertedId){
                    alert('successfull')
                }

            }
        }
    };

    return (
        <div className="px-12 pt-16">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {/* Display error message if there's an error */}
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <div className="text-center">
                    <button className="bg-blue-600 px-24 py-3 rounded-md text-white text-2xl my-12" type="submit"
                        disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className="text-red-600">{error}</p>
                    {transactionId && <p className="text-green-600">yoru transaction id: {transactionId}</p>}
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
