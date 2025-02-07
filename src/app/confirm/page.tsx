'use client';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Booking Confirmed</h1>
        <div className="text-center text-green-500 text-3xl mb-4">
          <span role="img" aria-label="checkmark">✔</span>
        </div>
        <p className="text-green-500 text-lg text-center">
          Your car has been successfully booked for rent! 🚗
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;