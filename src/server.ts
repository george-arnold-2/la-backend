import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

interface Player {
    Name: string;
    Position: string;
    'Projected Points': number;
    ID: string;
}

// Load players data
let playersData: Player[] = [];

try {
    const dataPath = path.join(__dirname, '../fantasy-data.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    playersData = JSON.parse(rawData);
    console.log(`Loaded ${playersData.length} players`);
} catch (error) {
    console.error('Error loading players data:', error);
}

// Get all players
app.get('/api/players', (req, res) => {
    res.json(playersData);
});

// Get player by ID
app.get('/api/players/:id', (req, res) => {
    const player = playersData.find((p) => p.ID === req.params.id);
    if (!player) {
        return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
