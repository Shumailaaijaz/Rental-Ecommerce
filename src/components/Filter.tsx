
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGasPump, FaCogs, FaUserFriends } from 'react-icons/fa';


// Define the type for Car objects
type Car = {
  id: number;
  name: string;
  price: string;
  image: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
};

const cars: Car[] = [
  {
    id: 1,
    name: "Tesla Model 3",
    price: "80.0/day",
    image: "/images/r1.png",
    type: "Electric",
    fuelCapacity: "1kWh",
    transmission: "Automatic",
    capacity: "5People",
  },
  {
    id: 2,
    name: "BMW i8",
    price: "12.0/day",
    image: "/images/r2.png",
    type: "Hybrid",
    fuelCapacity: "55L",
    transmission: "Manual",
    capacity: "4People",
  },
  {
    id: 3,
    name: "Audi e-tron",
    price: "90.0/day",
    image: "/images/p4.png",
    type: "Electric",
    fuelCapacity: "70L",
    transmission: "Automatic",
    capacity: "5People",
  },
  {
    id: 4,
    name: "Toyota Prius",
    price: "75.0/day",
    image: "/images/r7.png",
    type: "Hybrid",
    fuelCapacity: "60L",
    transmission: "Automatic",
    capacity: "5People",
  },
  {
    id: 5,
    name: "Ford Mustang",
    price: "11.0/day",
    image: "/images/nisan.png",
    type: "Gasoline",
    fuelCapacity: "65L",
    transmission: "Manual",
    capacity: "2 People",
  },
  {
    id: 6,
    name: "Chevrolet Camaro",
    price: "15.0/day",
    image: "/images/hero1.png",
    type: "Gasoline",
    fuelCapacity: "60 L",
    transmission: "Manual",
    capacity: "4 People",
  },
  {
    id: 7,
    name: "BMW X5",
    price: "10.0/day",
    image: "/images/p3.png",
    type: "Diesel",
    fuelCapacity: "75L",
    transmission: "Automatic",
    capacity: "5People",
  },
  {
    id: 8,
    name: "Koenigsegg",
    price: "30.0/day",
    image: "/images/p1.png",
    type: "Electric",
    fuelCapacity: "1kWh",
    transmission: "Automatic",
    capacity: "2People",
  },

];

const Filter = () => {
  const [filter, setFilter] = useState<string>("All"); // State for filter
  const router = useRouter();

  const handleRentNow = (carId: number) => {
    router.push(`/cars/${carId}`); // Navigate to the car's page
  };

  // Filter cars based on the selected filter
  const filteredCars = filter === "All" ? cars : cars.filter((car) => car.type === filter);

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-200 min-h-screen">
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-8 text-center">Available Cars for Rent</h2>

        {/* Filter Section */}
        <div className="mb-6 flex justify-center gap-4 flex-wrap">
          {["All", "Electric", "Hybrid", "Gasoline", "Diesel"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg ${filter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"} transition-all duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Link href={`/car/${car.id}`} className="block">
                <div>
                  <div className="mt-6 mb-2 text-left">
                    <h3 className="text-lg font-bold">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <Image
                    src={car.image}
                    alt={car.name}
                    height={300}
                    width={300}
                    className="w-full h-56 object-contain mb-4 rounded-md"
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center text-gray-600 mb-4">
                <p className="flex items-center text-sm">
                  <FaGasPump className="mr-2 text-blue-500" />
                  {car.fuelCapacity}
                </p>
                <p className="flex items-center text-sm">
                  <FaCogs className="mr-2 text-green-500" />
                  {car.transmission}
                </p>
                <p className="flex items-center text-sm">
                  <FaUserFriends className="mr-2 text-red-500" />
                  {car.capacity}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-extrabold text-black">{car.price}</p>
                <Link href={"/detailPage"}>
                <button
                  onClick={() => handleRentNow(car.id)}
                  className="gap-2 px-3 py-2 text-base font-normal justify-center text-center text-white bg-[#3563E9] rounded"
                >
                  Rent Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Cars Message */}
        {filteredCars.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No cars available for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
