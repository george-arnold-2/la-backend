# Vercel Deployment Guide

Your Express.js backend has been configured for Vercel deployment. Here's what has been set up and the next steps:

## What's Been Configured

✅ **Vercel Configuration** (`vercel.json`)
- Configured serverless functions for TypeScript
- Set up routing for API endpoints

✅ **API Routes** (`api/` directory)
- `/api/players` - Get all players
- `/api/players/[id]` - Get player by ID
- CORS headers configured for cross-origin requests

✅ **Dependencies**
- Added `@vercel/node` for Vercel serverless functions
- Updated package.json with proper dependencies

✅ **Data Access**
- `fantasy-data.json` is accessible from the root directory

## Deployment Options

### Option 1: Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

### Option 2: GitHub Integration
1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel at [vercel.com](https://vercel.com)
3. Import your repository and deploy

## API Endpoints After Deployment

Once deployed, your API will be available at:
- `https://your-project.vercel.app/api/players` - Get all players
- `https://your-project.vercel.app/api/players/{id}` - Get specific player

## Environment Variables

If you need environment variables:
1. Add them in the Vercel dashboard under Project Settings > Environment Variables
2. Or use the Vercel CLI: `vercel env add`

## Testing Locally

To test the Vercel functions locally:
```bash
vercel dev
```

This will start a local development server that mimics Vercel's serverless environment.

## Notes

- The original Express server (`src/server.ts`) is kept for local development
- Vercel will use the serverless functions in the `api/` directory
- CORS is configured to allow requests from any origin
- The fantasy data is loaded from the root `fantasy-data.json` file
