#!/bin/bash

# # Create root directory
mkdir project-root
cd project-root

# Create backend directory
mkdir backend
cd backend

# Create subdirectories
mkdir src
cd src
mkdir config controllers models routes middlewares services
cd ..

# Create tests directory
mkdir tests

# Create backend files
touch .gitignore app.js package.json README.md

# Write content to backend files
cat <<EOL >.gitignore
node_modules
EOL

cat <<EOL >app.js
// Express application setup goes here
const express = require('express');
const app = express();

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
EOL

cat <<EOL >package.json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.17.1"
    // Add other dependencies as needed
  },
  "devDependencies": {
    // Add devDependencies as needed
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "Backend for the project"
}
EOL

cat <<EOL >README.md
# Backend

This is the backend for the project.

## Setup

1. Install dependencies:
#    bash
#    npm install
