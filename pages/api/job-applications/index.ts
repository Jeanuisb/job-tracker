import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
const uploadDir = "./public/uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === "POST") {
    const form = formidable({ multiples: false, uploadDir: "./public/uploads", keepExtensions: true });

    try {
      
      const { fields, files } = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve({ fields, files });
        });
      });
      console.log('Fields:', fields);
console.log('Files:', files);



      // Extract fields and handle possible arrays
      const location = Array.isArray(fields.location) ? fields.location[0] : fields.location || "";
      const site = Array.isArray(fields.site) ? fields.site[0] : fields.site || "";
      const resumeFile = files.resume as formidable.File | formidable.File[] | undefined;

const resume = resumeFile
  ? Array.isArray(resumeFile)
    ? resumeFile[0].filepath
    : resumeFile.filepath
  : "";

    
  const jobData = {
    dateApplied: fields.dateApplied?.toString() || "",
    company: fields.company?.toString() || "",
    title: fields.title?.toString() || "",
    status: fields.status?.toString() || "",
    site,
    location,
    resume,
    office: fields.office?.toString() || "remote", // Default to "remote" if not provided
    salary: parseInt(fields.salary?.toString() || "0"), // Ensure salary is an integer
    interview: fields.interview?.toString() || "N/A", // Default to "N/A" if not provided
    notes: fields.notes?.toString() || "", // Allow notes to be empty
  };
  
  const createdJob = await prisma.jobApplication.create({
    data: jobData,
  });
  
  

      res.status(200).json(createdJob);
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
