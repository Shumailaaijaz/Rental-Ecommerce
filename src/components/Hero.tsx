


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/images/bl.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl font-bold text-[#FFFFFF] mb-2">
              The Best Platform for Car Rental
            </h2>
            <p className="text-white mb-6">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            </Link>
            <Image
              src="/images/hero1.png"
              alt="Car"
              height={500}
              width={500}
              className="mt-4 w-full max-w-[340px] mx-auto object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/images/br.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl font-bold text-[#FFFFFF] mb-2">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white mb-6">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <Link href="/testdrive">
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            </Link>
            <Image
              src="/images/hero2.png"
              alt="Car"
              height={500}
              width={500}
              className="mt-4 w-full max-w-[340px] mx-auto object-cover"
            />
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium text-black mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-black mb-1">Locations</label>
                <select className="w-full border bg-white text-black rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-black  text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border bg-white text-black rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-black text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border bg-white text-black rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              ↔
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg text-black font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-black text-sm mb-1">Locations</label>
                <select className="w-full border bg-white text-black rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-black text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border bg-white text-black rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-black text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border bg-white text-black rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
