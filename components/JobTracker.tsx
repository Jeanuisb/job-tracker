"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function JobTracker({ initialData }: { initialData: any[] }) {
  const [jobApplications, setJobApplications] = useState(initialData);
  const [formData, setFormData] = useState({
    dateApplied: "",
    company: "",
    title: "",
    status: "",
    site: "",
    location: "",
    resume: "",
    office: "remote",
    salary: "",
    interview: "",
    notes: "",
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    
  
    // Create a FormData object
    const formDataObj = new FormData();
    formDataObj.append("dateApplied", formData.dateApplied);
    formDataObj.append("company", formData.company);
    formDataObj.append("title", formData.title);
    formDataObj.append("status", formData.status);
    formDataObj.append("site", formData.site);
    formDataObj.append("location", formData.location);
    formDataObj.append("office", formData.office);
    formDataObj.append("salary", formData.salary);
    formDataObj.append("interview", formData.interview);
    formDataObj.append("notes", formData.notes);
  
    if (formData.resume) {
      formDataObj.append("resume", formData.resume); // Add the file to FormData
    }
  
    try {
      const res = await fetch("/api/job-applications", {
        method: "POST",
        body: formDataObj, // Send the FormData object
      });
      
      console.log('Payload:', formDataObj);

  
      if (!res.ok) {
        const error = await res.text();
        console.error("API Response Error:", error);
        alert("Error saving job application.");
        return;
      }
  
      const savedJob = await res.json();
      console.log("New job saved:", savedJob);
  
      setJobApplications((prev) => [...prev, savedJob]);
  
      setFormData({
        dateApplied: "",
        company: "",
        title: "",
        status: "",
        site: "",
        resume: "" , // Reset the file field
        location: "",
        office: "remote",
        salary: "",
        interview: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error submitting job application:", error);
      alert("An error occurred while saving the job application.");
    }
  };
  
  
  return (
    <div>
      {/* Table for job applications */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 bg-white border border-gray-300">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="px-4 py-2 border">Date Applied</th>
              <th className="px-4 py-2 border">Company</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Site</th>
              <th className="px-4 py-2 border">Resume</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Office</th>
              <th className="px-4 py-2 border">Salary</th>
              <th className="px-4 py-2 border">Interview</th>
              <th className="px-4 py-2 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.length > 0 ? (
              jobApplications.map((job) => (
                <tr key={job.id} className="hover:bg-gray-100 border-t border-gray-300">
                  <td className="px-4 py-2 border">{job.dateApplied}</td>
                  <td className="px-4 py-2 border">{job.company}</td>
                  <td className="px-4 py-2 border">{job.title}</td>
                  <td className="px-4 py-2 border">{job.status}</td>
                  <td className="px-4 py-2 border">{job.site}</td>
                  <td className="px-4 py-2 border">{job.resume}</td>
                  <td className="px-4 py-2 border">{job.location}</td>
                  <td className="px-4 py-2 border">{job.office}</td>
                  <td className="px-4 py-2 border">{job.salary}</td>
                  <td className="px-4 py-2 border">{job.interview}</td>
                  <td className="px-4 py-2 border">{job.notes}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="text-center py-4">
                  No job applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <form onSubmit={handleAddJob} className="mt-6 bg-white shadow-md rounded-lg p-4">
  <h2 className="text-xl font-bold mb-4">Add New Job Application</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Date Applied */}
    <div>
      <label className="block text-sm font-medium mb-1">Date Applied</label>
      <input
        type="date"
        name="dateApplied"
        value={formData.dateApplied}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
        required
      />
    </div>

    {/* Company */}
    <div>
      <label className="block text-sm font-medium mb-1">Company</label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
        required
      />
    </div>

    {/* Title */}
    <div>
      <label className="block text-sm font-medium mb-1">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
        required
      />
    </div>

    {/* Status */}
    <div>
      <label className="block text-sm font-medium mb-1">Status</label>
      <input
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
      />
    </div>

    {/* Site */}
    <div>
      <label className="block text-sm font-medium mb-1">Website</label>
      <input
        type="text"
        name="site"
        value={formData.site}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
      />
    </div>

    {/* Resume */}
<div>
  <label className="block text-sm font-medium mb-1">Resume (PDF or Word)</label>
  <input
    type="file"
    name="resume"
    accept=".pdf,.doc,.docx"
    onChange={(e) => {
      const file = e.target.files ? e.target.files[0] : null;
      setFormData({ ...formData, resume: "" }); // Store the file object in the state
    }}
    className="w-full border border-gray-300 rounded-lg p-2"
  />
</div>

    {/* Location */}
    <div>
      <label className="block text-sm font-medium mb-1">Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
      />
    </div>

    {/* Office */}
    <div>
      <label className="block text-sm font-medium mb-1">Office</label>
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

    {/* Salary */}
    <div>
      <label className="block text-sm font-medium mb-1">Salary</label>
      <input
        type="text"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
      />
    </div>

    {/* Interview */}
    <div>
      <label className="block text-sm font-medium mb-1">Interview</label>
      <input
        type="text"
        name="interview"
        value={formData.interview}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
      />
    </div>

    {/* Notes */}
    <div>
      <label className="block text-sm font-medium mb-1">Notes</label>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2"
      ></textarea>
    </div>
  </div>
  <button
    type="submit"
    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
  >
    Add Job
  </button>
</form>

    </div>
  );
}
