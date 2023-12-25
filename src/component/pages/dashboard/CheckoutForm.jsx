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
                if (res.data?.paymentResult?.insertedId) {
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
                    <div className="card-actions justify-center">
                        <button className=" mt-3 px-16 py-3 bg-[#12d0e5] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10"
                                disabled={!stripe || !clientSecret}>
                                Pay
                            </span>
                        </button>
                    </div>
                    <p className="text-red-600">{error}</p>
                    {transactionId && <p className="text-green-600">yoru transaction id: {transactionId}</p>}
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
