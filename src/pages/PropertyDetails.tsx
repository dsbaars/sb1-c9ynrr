import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { MapPin, Calendar, Star } from 'lucide-react';
import PriceDisplay from '../components/PriceDisplay';

function PropertyDetails() {
  const { id } = useParams();
  const [selectedDates, setSelectedDates] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const property = {
    title: 'Luxury Villa with Ocean View',
    location: 'Malibu, California',
    price: '$350',
    rating: 4.9,
    description: 'Experience luxury living in this stunning oceanfront villa. Featuring panoramic views, private beach access, and world-class amenities.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&w=800&q=80',
    ],
    amenities: ['Ocean View', 'Private Pool', 'WiFi', 'Kitchen', 'Free Parking'],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-600">{property.location}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="font-medium">{property.rating}</span>
            </div>
          </div>

          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img
              src={property.images[0]}
              alt={property.title}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-4">About this place</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <ul className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <PriceDisplay usdPrice={property.price} size="lg" />
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                    onChange={(e) => setSelectedDates(prev => ({ ...prev, start: new Date(e.target.value) }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                    onChange={(e) => setSelectedDates(prev => ({ ...prev, end: new Date(e.target.value) }))}
                  />
                </div>
              </div>

              <button
                className="w-full bg-rose-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 flex items-center justify-center"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;