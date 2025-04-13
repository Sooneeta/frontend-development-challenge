# Frontend-Development-Challenge

## Setup Instructions

Follow these steps to set up and run the Todo App on your local machine:

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd frontend-development-challenge
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```
4. Open `http://localhost:3000` in your browser.

## Features

### 1. Add and Delete Tasks
- Users can add new task, mark them as complete/incomplete and delete them.

### 2. Contact Form
- A contact form allows users to submit their name, email, contact-number and company or business name.


## Implementation Details

### State Management
- The app uses the Context API to manage global state (`TaskContext`).

### Form Handling & Validation
- The contact form uses react-hook-form for efficient form management.
- zod is integrated for schema-based input validation.

### Developed by Sunita Thapa

