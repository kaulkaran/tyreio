import React from 'react';
import { MapPin } from 'lucide-react';

const MapPlaceholder = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden bg-blue-50 border border-blue-100 flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-4">
        <MapPin className="h-12 w-12 text-blue-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
        <p className="text-gray-600">
          Landmark Tower Sector 44<br />
          Plot No. - 3, South City L<br />
          Gurugram, Haryana 122001
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Tech+Plaza+New+York"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          View on Google Maps
        </a>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-transparent" />
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-blue-200" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;