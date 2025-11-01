import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold z-10">
            {property.discount}
          </div>
        )}
      </div>

      {/* Property Content */}
      <div className="p-4">
        {/* Property Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
          {property.name}
        </h3>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-2">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-sm font-medium text-gray-700">{property.rating}</span>
          </div>
        </div>

        {/* Property Features */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span>{property.offers.bed} bed</span>
          <span>{property.offers.shower} bath</span>
          <span>{property.offers.occupants} guests</span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {cat}
            </span>
          ))}
          {property.category.length > 2 && (
            <span className="text-gray-500 text-xs">+{property.category.length - 2} more</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">${property.price}</span>
            <span className="text-gray-600 text-sm ml-1">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;