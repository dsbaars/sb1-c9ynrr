import React from 'react';
import { Github, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">BitStays</h3>
            <p className="text-gray-600 text-sm">
              Book unique places to stay around the world using Bitcoin Lightning Network.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Safety Information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Cancellation Options</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Bitcoin & Lightning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Nostr Protocol</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Developer API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} BitStays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;