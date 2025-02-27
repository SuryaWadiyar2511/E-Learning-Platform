import React, { useEffect } from "react";

const Payment = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handlePayment = () => {
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount: 30000, // 30000 = INR 300
            currency: "INR",
            name: "Learning Portal",
            description: "Course Purchase",
            handler: function(response) {
                alert("Payment Successful" + response.razorpay_payment_id);
            },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return <button onClick={handlePayment}>Pay Now</button>;
};

export default Payment;