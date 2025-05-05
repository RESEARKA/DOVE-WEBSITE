#!/bin/bash

# DOVE Website Setup Script
# This script installs dependencies and runs the development server
# Based on DOVE Website Guidelines v1.3

echo "🕊️  Setting up DOVE Website (Eleventy version)"
echo "================================================"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm could not be found. Please install Node.js first."
    echo "Visit https://nodejs.org/ to download and install Node.js"
    exit 1
fi

echo "✅ npm is installed"

# Install dependencies
echo "🔄 Installing dependencies..."
npm install

# Install Tailwind plugins
echo "🔄 Installing Tailwind plugins..."
npm install @tailwindcss/typography @tailwindcss/forms --save-dev

echo "✅ Dependencies installed successfully!"

# Create necessary directories if they don't exist
mkdir -p _site/assets/css

# Generate initial CSS
echo "🔄 Generating initial CSS..."
npx tailwindcss -i ./src/assets/css/tailwind.css -o ./_site/assets/css/styles.css

echo "✅ Initial CSS generated!"

# Start the development server
echo "🚀 Starting development server..."
echo "📝 You can edit content in the src/pages directory"
echo "📝 Edit site navigation in src/_data/navigation.json"
echo "📝 Edit features in src/_data/features.json"
echo "💻 The site will be available at http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================================"

npm run dev
