import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

interface Player {
    Name: string;
    Position: string;
    'Projected Points': number;
    ID: string;
}

let playersData: Player[] = [];

// Load players data
try {
    const dataPath = path.join(process.cwd(), 'fantasy-data.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    playersData = JSON.parse(rawData);
} catch (error) {
    console.error('Error loading players data:', error);
}

export default function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        res.status(200).json(playersData);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
