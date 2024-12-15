export interface JobApplication {
    id: string; // Unique identifier
    dateApplied: string;
    company: string;
    title: string;
    status: string;
    site: string;
    resume: string;
    location: string;
    office: 'remote' | 'hybrid' | 'in-person';
    salary: string;
    interview: string;
    notes: string;
  }

  const testJob: JobApplication = {
    id: "test-id-123",
    dateApplied: "2024-12-13",
    company: "Test Company",
    title: "Software Engineer",
    status: "Applied",
    site: "LinkedIn",
    resume: "/uploads/resume.pdf",
    location: "Remote",
    office: "remote",
    salary: "100000",
    interview: "2024-12-20",
    notes: "Excited about this opportunity",
};

console.log("Testing JobApplication Object:", testJob);

  