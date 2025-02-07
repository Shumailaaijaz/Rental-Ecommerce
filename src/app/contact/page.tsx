'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission (e.g., email sending or API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setResponseMessage('Thank you for contacting us! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Contact the Dealer</h1>
          <p className="text-gray-600 mb-6">Fill out the form below to get in touch with the dealer. We will get back to you as soon as possible.</p>

          {responseMessage && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              {responseMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={4}
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;