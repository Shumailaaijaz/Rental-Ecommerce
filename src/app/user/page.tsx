'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  savedAddresses: [
    '123 Main St, City, Country',
    '456 Elm St, City, Country',
  ],
};

const mockOrders = [
  { id: 1, date: '2025-01-15', total: '$50', items: 2 },
  { id: 2, date: '2025-01-18', total: '$30', items: 1 },
];

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'orders'>('details');

  const renderContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="flex flex-col items-center text-center space-y-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">User Details</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  <strong className="font-medium">Name:</strong> {mockUser.name}
                </p>
                <p className="text-lg text-gray-700">
                  <strong className="font-medium">Email:</strong> {mockUser.email}
                </p>
                <h4 className="text-lg text-gray-800 font-extrabold mt-4">Saved Addresses:</h4>
                <ul className="list-disc pl-5 space-y-2 text-center">
                  {mockUser.savedAddresses.map((address, index) => (
                    <li key={index} className="text-gray-600 text-base">
                      {address}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="flex flex-col items-center text-center space-y-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Order History</h3>
              <ul className="space-y-4 text-left">
                {mockOrders.map((order) => (
                  <li key={order.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <Link
                      href={`/order/${order.id}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      <strong>Order {order.id}</strong> - {order.date} - {order.total} ({order.items} items)
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        User Profile
      </h2>

      {/* Tabs Section */}
      <div className="tabs flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab('details')}
          className={`py-3 px-8 text-lg font-semibold ${
            activeTab === 'details'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-700'
          } rounded-md shadow-md transition duration-200`}
        >
          Profile Details
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`py-3 px-8 text-lg font-semibold ${
            activeTab === 'orders'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-700'
          } rounded-md shadow-md transition duration-200`}
        >
          Order History
        </button>
      </div>

      {/* Content Section */}
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;