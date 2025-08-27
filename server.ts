import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/fantasy-data', async (req: Request, res: Response) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res
                .status(400)
                .json({ error: "Missing 'text' in request body." });
        }

        // Do something with text...

        res.json({ success: true, data: text }); // placeholder
    } catch (error: any) {
        console.error('ERROR', error.message);

        res.status(error.statusCode || 500).json({
            error: error.message || 'The developer is out of tokens for this plan, please check back later'
        });
    }
});

// port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});