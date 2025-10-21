import React from 'react';

/**
 * Simple site footer displayed on every page. It uses a soft
 * neutral background colour with muted text and includes the
 * copyright year. Update this file to add social links or other
 * content as needed.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-clean text-gray-600 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p>&copy; {year} EverWhite Health. All rights reserved.</p>
      </div>
    </footer>
  );
}
