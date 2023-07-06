# Project 14 - HRnet

This codebase contains the code needed to run the backend for HRnet.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v18.16](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3000 and you will now have states and departments in your MongoDB database

## Populated Database Data

Once you run the `populate-db` script, you should have states and departments in your database: