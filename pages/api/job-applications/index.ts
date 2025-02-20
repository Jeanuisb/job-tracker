import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
const uploadDir = "./public/uploads";

// Checks if the upload Directory Exists
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
  
  // Ensure formidable configuration handles files correctly
const form = formidable({
  multiples: false,
  uploadDir: uploadDir, // Ensure this matches the directory you created
  keepExtensions: true,
  maxFileSize: 10 * 1024 *1024
});

// Debug to log the parsed files
const { fields, files } = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
  form.parse(req, (err, fields, files) => {
    if (err) reject(err);
    resolve({ fields, files });
  });
});

console.log('Fields:', fields);
console.log('Files:', files);

// Handle the file data
const resumeFile = files.resume as formidable.File | undefined;
const resume = resumeFile ? resumeFile.filepath : '';
console.log('Resume File Path:', resume);

}
