import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import PriceDisplay from './PriceDisplay';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
}

function PropertyCard({ id, title, location, price, rating, image }: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1">
        <div className="relative aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <div className="flex items-center bg-white px-2 py-1 rounded-lg shadow-md">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 truncate">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mt-1">{location}</p>
          <div className="mt-2">
            <PriceDisplay usdPrice={price} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;