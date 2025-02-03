"use client";

import { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import Link from 'next/link';

// Define the Car type
type Car = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  imageUrl: string;
};

// Initialize Sanity client
const client = sanityClient({
  projectId: 'jswtbojc', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-05-03', // Add the API version to avoid deprecation warning
  useCdn: true, // Enable CDN for faster responses
});

// Fetch cars from Sanity
const fetchCars = async (): Promise<Car[]> => {
  try {
    const query = `*[_type == "car"] {
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      "imageUrl": image.asset->url
    }`;
    const cars = await client.fetch<Car[]>(query);
    return cars;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
};

const CarList = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCars().then((data) => {
      console.log('Fetched cars:', data); // Log the fetched data
      setCars(data);
    });
  }, []);

  if (cars.length === 0) {
    return <p className="text-center text-gray-600">No cars found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cars.map((car) => (
        <Link
          key={car._id} // Use _id as the key
          href={`/car/${car._id}`} // Link to dynamic route
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
        >
          <img
            src={car.imageUrl || 'default-image-url'}
            alt={car.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{car.name || 'No Name'}</h2>
            <p className="text-gray-600">Brand: {car.brand || 'N/A'}</p>
            <p className="text-gray-600">Type: {car.type || 'N/A'}</p>
            <p className="text-gray-600">Fuel Capacity: {car.fuelCapacity || 'N/A'}</p>
            <p className="text-gray-600">Transmission: {car.transmission || 'N/A'}</p>
            <p className="text-gray-600">Seating Capacity: {car.seatingCapacity || 'N/A'}</p>
            <p className="text-lg font-semibold mt-2">Price Per Day: ${car.pricePerDay || 'N/A'}</p>
            <p className="text-gray-600">Original Price: ${car.originalPrice || 'N/A'}</p>
            <p className="text-gray-600">Tags: {car.tags ? car.tags.join(', ') : 'No tags'}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CarList;