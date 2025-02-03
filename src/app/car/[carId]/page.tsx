"use client";

import { createClient } from "@sanity/client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Initialize Sanity client
const client = createClient({
  projectId: "jswtbojc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03", // Use the latest stable API version
});

// Fetch car details by ID
const fetchCarById = async (carId: string) => {
  try {
    const query = `*[_type == "car" && _id == $carId][0] {
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
    const car = await client.fetch(query, { carId });
    return car;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return null;
  }
};

export default function CarDetails({ params }: { params: { carId: string } }) {
  const [car, setCar] = useState<any>(null);
  const [isInCart, setIsInCart] = useState(false);

  // Destructure carId directly from params
  const { carId } = params;

  // Fetch car details on component mount
  useEffect(() => {
    if (!carId) return; // Ensure carId is available

    fetchCarById(carId).then((data) => {
      setCar(data);
      checkIfInCart(data?._id); // Check if the car is already in the cart
    });
  }, [carId]); // Use carId as a dependency

  // Check if the car is already in the cart
  const checkIfInCart = (carId: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isCarInCart = cart.some((item: any) => item._id === carId);
    setIsInCart(isCarInCart);
  };

  // Add car to cart
  const addToCart = () => {
    if (!car) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cart, car];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsInCart(true);
    alert(`${car.name} has been added to your cart!`);
  };

  if (!car) {
    return <p className="text-center text-gray-600">Car not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Car Image */}
        <img
          src={car.imageUrl || "default-image-url"}
          alt={car.name}
          className="w-full h-96 object-cover"
        />

        {/* Car Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{car.name || "No Name"}</h1>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailItem label="Brand" value={car.brand} />
            <DetailItem label="Type" value={car.type} />
            <DetailItem label="Fuel Capacity" value={car.fuelCapacity} />
            <DetailItem label="Transmission" value={car.transmission} />
            <DetailItem label="Seating Capacity" value={car.seatingCapacity} />
            <DetailItem label="Price Per Day" value={`$${car.pricePerDay}`} />
            <DetailItem label="Original Price" value={`$${car.originalPrice}`} />
            <DetailItem label="Tags" value={car.tags ? car.tags.join(", ") : "No tags"} />
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button
              onClick={addToCart}
              disabled={isInCart}
              className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              } transition-colors`}
            >
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>

          {/* Back Button */}
          <div className="mt-4">
            <Link
              href="/carcategory"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Car Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable DetailItem component
const DetailItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value || "N/A"}</p>
  </div>
);