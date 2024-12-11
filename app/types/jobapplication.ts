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
  