import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const Subscription = () => {
  const handleSubscription = async (plan) => {
    const stripe = await stripePromise;

    // Call your backend to create a Checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="subscription">
      <h2>Choose Your Plan</h2>
      <div className="plan">
        <h3>Freemium</h3>
        <p>Access to basic features.</p>
        <button onClick={() => handleSubscription('freemium')}>Subscribe for Free</button>
      </div>
      <div className="plan">
        <h3>Premium</h3>
        <p>Full access to all features.</p>
        <button onClick={() => handleSubscription('premium')}>Subscribe for $9.99/month</button>
      </div>
    </div>
  );
};

export default Subscription;
