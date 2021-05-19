import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IsjELDLR5doMBmFUAxxk267ZNPjHi9QdhV9WRcFcrVEZWLbDA7rP4wJOAHMRk0VAXedAf3e550gfMYNSkquP3kj00jkJmihkg';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"

            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;