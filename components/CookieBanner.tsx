"use client"
// components/CookieBanner.js
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 text-center z-[999999999]">
      <p>
        Tento web používa cookies na zlepšenie služieb. Pokračovaním súhlasíte s ich
        používaním.
      </p>
      <button onClick={handleAccept} className="my-4 bg-blue-500 text-white px-4 py-2 rounded">
        Súhlasím
      </button>
    </div>
  );
}