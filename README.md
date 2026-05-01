# Election Awareness Web App

A production-ready Node.js web application designed to educate users about the election process in India. Built with Express.js and EJS templating, this app provides information on voting eligibility, mock voting, and key election concepts.

## Features

- **Home Page (/)**: Overview of the app with "Why Voting Matters" section and navigation
- **Eligibility Checker (/eligibility)**: Check if you're eligible to vote based on age (18+)
- **Mock Voting System (/vote)**: Interactive voting for 4 dummy candidates with session-based vote prevention and highlighting
- **Information Page (/info)**: Educational content about voting, EVM, VVPAT, and the election process in India

## Tech Stack

- Node.js
- Express.js
- EJS templating
- Bootstrap (CDN)
- Express-session for session management
- In-memory data storage (no database required)

## Installation and Running

1. Navigate to the `election-app` directory
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open your browser to `http://localhost:8080`

## Deployment to Google Cloud Run

1. Ensure you have the Google Cloud SDK installed and authenticated
2. From the `election-app` directory:
   ```bash
   gcloud builds submit --tag gcr.io/[PROJECT-ID]/election-app
   gcloud run deploy election-app --image gcr.io/[PROJECT-ID]/election-app --platform managed --allow-unauthenticated
   ```

The app will be accessible at the provided Cloud Run URL and automatically binds to `0.0.0.0` with the PORT environment variable.

## Project Structure

```
election-app/
├── index.js              # Main server with routes and session config
├── package.json          # Dependencies and start script
├── Dockerfile            # Docker config for Cloud Run
├── .dockerignore         # Excludes unnecessary files
├── views/                # EJS templates
│   ├── home.ejs          # Home page with navbar and footer
│   ├── eligibility.ejs   # Eligibility checker
│   ├── vote.ejs          # Mock voting system
│   └── info.ejs          # Information page
└── public/               # Static assets (empty)
```

## Hackathon Notes

- Built for Hack-2-Skill Competition
- Fully deployable without modifications
- Clean, professional UI with Bootstrap
- Session-based voting prevention
- Mobile responsive design
│   ├── home.ejs
│   ├── eligibility.ejs
│   ├── eligibility-result.ejs
│   ├── voting.ejs
│   └── info.ejs
└── public/           # Static files (currently empty)
```
