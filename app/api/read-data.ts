import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'fs/promises';
import path from 'path';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const filePath = path.join(process.cwd(), 'app/lib', 'data.json');
            const data = await readFile(filePath, 'utf8');
            const parsedData = JSON.parse(data);
            res.status(200).json(parsedData);
            return;
        } catch (error) {
            res.status(500).json({ error });
            return;
        }
    }
}
