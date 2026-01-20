'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link'; 
import Image from 'next/image';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Learn', hasDropdown: true },
    { label: 'Build', hasDropdown: true },
    { label: 'Network', hasDropdown: true },
    { label: 'Community', hasDropdown: true }
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">

       
        <div className="flex items-center justify-between">

        
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/solana-logo.png"
              alt="Solana Logo"
              width={130}
              height={30}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

         
          <nav className="hidden md:flex items-center gap-10 ml-16">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openMenu === item.label ? 'rotate-180 text-white' : 'text-gray-500'
                      }`}
                    />
                  )}
                </button>
              </div>
            ))}
          </nav>

          
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

       
        {mobileOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-800 pt-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center justify-between text-gray-300 hover:text-white text-sm font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} />}
              </button>
            ))}
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
