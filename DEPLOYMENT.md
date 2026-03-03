# Deployment Guide

## Quick Setup for GitHub + Vercel

### 1. GitHub Setup
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/SnehalPortfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Vercel Deployment
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. Add environment variables if needed:
   - `DATABASE_URL` (if using database)
   - `NODE_ENV=production`
6. Click Deploy!

### 3. Environment Variables (if needed)
In Vercel dashboard:
- Go to Settings → Environment Variables
- Add any variables from `.env.example`

### 4. Custom Domain (Optional)
- Go to Settings → Domains
- Add your custom domain

## That's it! Your portfolio should be live! 🚀

## Local Development
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
npm start
```