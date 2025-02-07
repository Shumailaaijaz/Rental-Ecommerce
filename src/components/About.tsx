
'use client';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-[#F4F8FB]">
      <div className="container mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-black mb-8">About Us</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Welcome to Rental Car Website a premier car rental service offering high-quality vehicles at affordable rates Whether you are planning a weekend getaway or a cross-country road trip we provide top-notch vehicles that make your journey smooth and enjoyable
        </p>

        {/* Mission and Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-[#3563E9] mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We aim to provide seamless car rental experiences with exceptional customer service and an extensive fleet of vehicles Our mission is to ensure your comfort convenience and satisfaction every step of the way
            </p>
          </div>

          {/* Services */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-[#3563E9] mb-4">Our Services</h3>
            <p className="text-gray-600">
              We offer a variety of car rental options including sedans SUVs sports cars and electric vehicles Each vehicle is well-maintained to ensure your safety and comfort Rent with us for short-term or long-term rentals wherever you go
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-[#3563E9] mb-4">Why Choose Us</h3>
            <p className="text-gray-600">
              Our easy-to-use booking system diverse fleet, and commitment to customer service set us apart from the competition Trust us for your next trip and enjoy peace of mind with every mile you drive
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all mb-12">
          <h3 className="text-2xl font-semibold text-[#3563E9] mb-4">Contact Us</h3>
          <p className="text-lg text-gray-600 mb-4">Have any questions? We are just a click away! Reach out to us today</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:contact@yourwebsite.com" className="text-blue-600 font-semibold hover:underline">
              Email Us
            </a>
            <a href="tel:+1234567890" className="text-blue-600 font-semibold hover:underline">
              Call Us
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-gray-600 mt-12">
          <p className="text-sm">
            © 2025 Rental Car Website | All rights reserved | Crafted with love
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
