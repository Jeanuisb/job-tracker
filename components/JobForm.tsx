"use client";

import React, { useState } from "react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    dateApplied: "",
    company: "",
    title: "",
    status: "",
    site: "",
    resume: "",
    location: "",
    office: "remote",
    salary: "",
    interview: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Later, we'll save the data to localStorage or a backend API
    alert("Job application added successfully!");
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
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Status</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Site</label>
        <input
          type="text"
          name="site"
          value={formData.site}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Office Type</label>
        <select
          name="office"
          value={formData.office}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="in-person">In-Person</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Salary</label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Interview</label>
        <input
          type="text"
          name="interview"
          value={formData.interview}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Save Job Application
      </button>
    </form>
  );
};

export default JobForm;
