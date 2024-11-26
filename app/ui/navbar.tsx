'use client';

import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-link';
import { useState } from 'react';

export default function NavBar() {
  const [click, setClick] = useState(false);

  const toggleNav = () => {
    setClick(!click)
  }

  return (
    <nav className="shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">reylosophy.com</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNav}>
              {click ? (
                <XMarkIcon className="w-6" />
              ) : (
                <Bars3BottomLeftIcon className="w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {click && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
}
