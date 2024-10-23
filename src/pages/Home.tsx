import React from 'react';
import PropertyCard from '../components/PropertyCard';

const FEATURED_PROPERTIES = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean View',
    location: 'Malibu, California',
    price: '$350',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=800&q=80'
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    location: 'New York City, NY',
    price: '$250',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&w=800&q=80'
  },
  {
    id: '3',
    title: 'Beachfront Paradise',
    location: 'Miami Beach, FL',
    price: '$400',
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&w=800&q=80'
  },
  {
    id: '4',
    title: 'Mountain Retreat',
    location: 'Aspen, Colorado',
    price: '$300',
    rating: 4.85,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&w=800&q=80'
  }
];

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Find your next dream stay
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover unique places to stay around the world
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURED_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;