import { PrismaClient } from "@prisma/client";
import JobTracker from "../components/JobTracker"; // Import the client-side component

const prisma = new PrismaClient();

export default async function HomePage() {
  const jobApplications = await prisma.jobApplication.findMany(); // Fetch from the database

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Job Application Tracker</h1>
      <JobTracker initialData={jobApplications} />
    </main>
  );
}
