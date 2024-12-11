import Link from "next/link";
import { jobApplications } from "@/data/jobApplications";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Job Application Tracker</h1>
      <Link href="/add-job" className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Add New Job
      </Link>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Date Applied</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Site</th>
              <th className="px-4 py-2">Office</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="px-4 py-2">{job.dateApplied}</td>
                <td className="px-4 py-2">{job.company}</td>
                <td className="px-4 py-2">{job.title}</td>
                <td className="px-4 py-2">{job.status}</td>
                <td className="px-4 py-2">{job.site}</td>
                <td className="px-4 py-2">{job.office}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default HomePage;
