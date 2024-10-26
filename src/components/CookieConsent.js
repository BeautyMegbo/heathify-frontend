// src/components/CookieConsent.js

import React, { useState } from 'react';

const CookieConsent = () => {
  const [consent, setConsent] = useState(null); // null means undecided

  const handleConsent = (choice) => {
    setConsent(choice);
    // Save the consent choice to local storage or send it to a server
    localStorage.setItem('cookieConsent', choice);
  };

  if (consent !== null) return null; // Hide the banner if consent is given

  return (
    <div className="cookie-consent-banner">
      <p>We use cookies to ensure you get the best experience on our website. Please choose your preferences:</p>
      <button onClick={() => handleConsent('all')}>Accept All</button>
      <button onClick={() => handleConsent('necessary')}>Only Necessary</button>
      <button onClick={() => handleConsent('none')}>Reject All</button>
    </div>
  );
};

export default CookieConsent;
