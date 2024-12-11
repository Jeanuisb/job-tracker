import React from 'react';
import JobForm from '@/components/JobForm';

const AddJobPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Add Job Application</h1>
      <JobForm />
    </main>
  );
};

export default AddJobPage;
