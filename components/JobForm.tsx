'use client';

import React, { useState } from 'react';

const JobForm = () => {
  const [formData, setFormData] = useState({
    dateApplied: '',
    company: '',
    title: '',
    status: '',
    site: '',
    resume: '',
    location: '',
    office: 'remote',
    salary: '',
    interview: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData); // For now, just log it
  };

  return (
    <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Date Applied</label>
        <input
          type="date"
          name="dateApplied"
          value={formData.dateApplied}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      {/* Add similar input fields for the rest of the data */}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Save Job Application
      </button>
    </form>
  );
};

export default JobForm;
