# ImagineAI

ImagineAI is a full-stack web application that provides an easy-to-use platform for generating artwork, illustrations, and creative visuals effortlessly. With ImagineAI, you can save your images and even share them with the community, making it simple to create, store, and showcase your unique AI-generated art.

## Features

- **AI-Powered Image Generation**: Generate unique and stunning images based on user-provided prompts using OpenAI's DALL-E model.
- **User-Friendly Interface**: A dynamic and interactive user interface built with React.js, making it easy to create and manage your image generation projects.
- **Responsive Design**: Tailwind CSS ensures that the application is responsive and visually appealing across all devices, and it allows users to seamlessly switch between light and dark mode.
- **Seamless Light/Dark Mode Switch**: Enjoy a smooth transition between light and dark modes, enhancing the user experience with visually consistent themes.
- **Seamless Backend Integration**: Node.js and Express.js provide a robust and scalable backend, handling requests, responses, and database interactions.
- **Flexible Data Storage**: MongoDB stores posts and generated images, offering flexibility and scalability for data management.
- **Full-Stack Architecture**: Combines a powerful backend and dynamic frontend to deliver a complete solution for AI-powered image generation.
- **Vite for Development**: Vite is used as the frontend build tool, offering fast development and optimized builds for the React.js application.

## Technologies Used

### 1. Node.js
Node.js serves as the server-side runtime environment, allowing the project to create a server that handles requests and interacts with the database.

### 2. Express.js
Express.js is the web framework used to build the server that processes requests and sends responses. It facilitates the creation of API endpoints for generating images and managing posts.

### 3. MongoDB
MongoDB is a NoSQL database used for storing posts and image data. It offers a flexible and scalable way to manage data.

### 4. React.js
React.js is used for building the client-side application, creating a dynamic and interactive user interface.

### 5. Tailwind CSS
Tailwind is utilized for styling the application with utility-first CSS, enabling a consistent and responsive design.

### 6. Vite
Vite is employed as the build tool for the frontend, providing fast development and optimized builds for the React.js application.

### 7. OpenAI's DALL-E Model
The DALL-E 2 is the core of the image generation feature, transforming text prompts into visually compelling images.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/EricChv/ImagineAI.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd imagineai
    ```
3. **Install server dependencies**:
    ```bash
    cd server
    npm install
    ```
4. **Install client dependencies**:
    ```bash
    cd ../client
    npm install
    ```
5. **Set up environment variables**:
   - Create a `.env` file in the `server` directory with the necessary environment variables such as your OpenAI API key, MongoDB connection string, and other configurations.

6. **Run the development servers**:
    - **Backend**:
        ```bash
        cd server
        npm start
        ```
    - **Frontend**:
        ```bash
        cd ../client
        npm run dev
        ```

## Usage

1. Visit the homepage to start generating images.
2. Click on "Create" on the navbar, then enter a text prompt and click the "Generate" button.
3. The application will use DALL-E to create a unique image based on your prompt.
4. Save and share your generated image to the community board.
