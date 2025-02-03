import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = {
            message: 'Hello, this is your API response!',
        };
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}