import { JobApplication } from "@/types/JobApplication";

export const jobApplications: JobApplication[] = [
  {
    id: "1",
    dateApplied: "2024-12-01",
    company: "Company A",
    title: "Software Engineer",
    status: "Applied",
    site: "LinkedIn",
    resume: "resume_a.pdf",
    location: "San Francisco, CA",
    office: "hybrid",
    salary: "120000",
    interview: "No interview yet",
    notes: "Follow up in two weeks",
  },
  {
    id: "2",
    dateApplied: "2024-12-05",
    company: "Company B",
    title: "Backend Developer",
    status: "Interview Scheduled",
    site: "Indeed",
    resume: "resume_b.pdf",
    location: "Remote",
    office: "remote",
    salary: "100000",
    interview: "Interview on 2024-12-10",
    notes: "Research company projects",
  },
];
