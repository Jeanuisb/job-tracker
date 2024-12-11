import React from 'react';

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">Job Application Tracker</h1>
      <p className="text-gray-600 mt-4">Track all your job applications in one place!</p>
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <p>No job applications yet. Add one to get started!</p>
      </div>
    </main>
  );
};

export default HomePage;
