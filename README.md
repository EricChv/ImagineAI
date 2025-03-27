# ImagineAI

ImagineAI is a full-stack web app for generating, saving, and sharing AI-created images using OpenAI's DALL-E.

## Features
- **AI Image Generation**: Uses OpenAI's DALL-E model to transform text prompts into unique images.
- **User-Friendly UI**: React.js provides a dynamic, component-based interface for seamless interaction.
- **Responsive Design**: Tailwind CSS ensures a flexible, mobile-friendly layout with utility-first styling.
- **Light/Dark Mode**: Users can switch themes effortlessly for a comfortable viewing experience.
- **Backend Integration**: Node.js & Express.js manage server-side logic, API endpoints, and data processing.
- **Data Storage**: MongoDB efficiently stores and retrieves user-generated images and posts.
- **Fast Development**: Vite speeds up frontend development with instant HMR, optimized dependency pre-bundling, and ES module-based performance enhancements.

## Technologies Used
- **Node.js & Express.js**: Provide a fast, scalable backend with API routing and request handling.
- **MongoDB**: NoSQL database enabling efficient and scalable storage for user-generated content.
- **React.js**: Powers a modular and interactive front-end experience.
- **Tailwind CSS**: Utility-first CSS framework for fast and consistent UI styling.
- **Vite**: Accelerates frontend builds with lightning-fast hot reloads and optimized asset handling.
- **DALL-E**: AI model that generates unique images from text-based prompts.

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/EricChv/ImagineAI.git
   ```
2. Install dependencies:
   ```bash
   cd imagineai/server && npm install
   cd ../client && npm install
   ```
3. Set up `.env` in `server` (API keys, DB connection, etc.).
4. Start servers:
   ```bash
   cd server && npm start
   cd ../client && npm run dev
   ```

## Usage
1. Visit the homepage.
2. Enter a text prompt and generate an image.
3. Save and share images with the community.

## Demo

https://github.com/user-attachments/assets/a39c8e6c-c0e9-4b83-abd0-ab05c0a50efa
