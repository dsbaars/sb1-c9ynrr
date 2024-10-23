import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Menu, Bitcoin } from 'lucide-react';
import { useNostr } from '../context/NostrContext';

function Navbar() {
  const { connect, publicKey } = useNostr();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-rose-500" />
              <span className="font-bold text-xl text-gray-900">BitStays</span>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative rounded-full shadow-sm">
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  placeholder="Search properties..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              {publicKey ? (
                <div className="flex items-center space-x-2">
                  <Bitcoin className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-gray-700">Connected</span>
                </div>
              ) : (
                <button
                  onClick={connect}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Connect Nostr
                </button>
              )}
            </div>

            <div className="flex items-center md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;