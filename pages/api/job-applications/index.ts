import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const {
                dateApplied,
                company,
                title,
                status,
                site,
                resume,
                location,
                office,
                salary,
                interview,
                notes,
            } = req.body;

            // Check if the required fields are present
            if (!dateApplied || !company || !title || !status) {
                return res.status(400).json({
                    error: 'Missing required fields: dateApplied, company, title, or status',
                });
            }

            // You can add your logic here to save the data to a database, etc.
            console.log('Received payload:', req.body);

            // Respond with success
            return res.status(200).json({ message: 'Job application saved successfully', data: req.body });
        } else {
            // If the request is not a POST, return method not allowed
            return res.status(405).json({ error: 'Method not allowed. Use POST.' });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

