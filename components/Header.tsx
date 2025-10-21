import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Site header with responsive navigation. The logo anchors the brand
 * identity and navigation links scroll to top-level pages. On small
 * screens a hamburger menu toggles the navigation.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="flex items-center space-x-2">
            <Image
              src="/assets/logo.png"
              alt="EverWhite Health logo"
              width={160}
              height={45}
              priority
            />
          </a>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="hover:text-coral transition-colors">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-coral transition-colors">About</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-coral transition-colors">Services</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-coral transition-colors">Contact</a>
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile navigation menu */}
      {open && (
        <nav className="md:hidden bg-white/90 backdrop-blur-sm">
          <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
            <li>
              <Link href="/">
                <a className="block py-2 px-3 rounded hover:bg-blush/60" onClick={() => setOpen(false)}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block py-2 px-3 rounded hover:bg-blush/60" onClick={() => setOpen(false)}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="block py-2 px-3 rounded hover:bg-blush/60" onClick={() => setOpen(false)}>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block py-2 px-3 rounded hover:bg-blush/60" onClick={() => setOpen(false)}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
