
# Password Reset Web Application 🚀

Welcome to our Password Reset Web Application! This project is built with love using React, Node.js, and MongoDB. It allows users to securely reset their passwords using JWT authentication.

## FrontEnd Netlify Deployed URL

🔸*Click on the Badge to Check out My Password Reset Application Here*👉🏻 [![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)](https://harsha-mern-password-reset.netlify.app)

## BackEnd Render Deployed URL
🔸[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://nodejstask-4-password-reset-backend.onrender.com)

## BackEnd GitHub Repository URL
🔸[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Harsha-2324/NodeJSTask_4_Password_Reset_BackEnd.git)

## Video Demo 🎥

Watch a quick video demonstration of our Password Reset Web Application:

1. **Video 1 Featuring:**
   https://github.com/Harsha-2324/NodeJSTask_4_Password_Reset_FrontEnd/assets/24225236/7cc6e3f2-cb6b-4d9c-841b-468fcd8f0210
   
    - `Register`: POST Data to MongoDB Database
    - `Login`: GET Data from MongoDB Database
    - `Forgot Password`: Mail Sent to Registerd User's Mail Id using SMTP Protocol
    - `JWT Token Generation`: For Secure user authentication
    - `Reset Password`: PUT Data to MongoDB Database
    - `Login`: using New Password


2. **Video 2 Featuring:**
   https://github.com/Harsha-2324/NodeJSTask_4_Password_Reset_FrontEnd/assets/24225236/1090d8ac-07bc-4c37-9a2e-10bdf8dd9b3c

    - `Email Validation`: Ensure user input email requirements for user security
    - `Password Validation`: Ensure user input password requirements for user security
    - `JWT Token Expiry`: After a Password Reset expiration for enhanced security

## Features ✨

- **JWT Authentication**: Secure user authentication with JSON Web Tokens.
- **Password Reset**: Seamless password reset functionality for users.
- **Email Notifications**: Nodemailer integration to send password reset emails.
- **JWT Token Expiry**: Automatic expiration of JWT tokens for enhanced security.
- **Signup**: User registration with email and password.
- **Authorize Email**: Validate email addresses to ensure they are legitimate.
- **Password Validation**: Ensure strong password requirements for user security.
- **React Frontend**: Modern and intuitive user interface built with React.
- **Node.js Backend**: Robust backend server developed with Node.js.
- **MongoDB Integration**: Integration with MongoDB for efficient data storage.

## Installation 🛠️

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/password-reset-web-app.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd password-reset-web-app
   ```

3. **Install Dependencies for the Frontend**:

   ```bash
   cd client
   npm install
   ```

4. **Install Dependencies for the Backend**:

   ```bash
   cd ..
   cd server
   npm install
   ```

5. **Set up Environment Variables**:

   - Create a `.env` file in the `server` directory.
   - Define the following variables:

     ```plaintext
     PORT=8888
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```

## Usage 🚀

1. **Start the Backend Server**:

   ```bash
   cd server
   npm start
   ```

2. **Start the Frontend Development Server**:

   ```bash
   cd client
   npm start
   ```

3. **Visit `http://localhost:3000`** in your web browser to access the application.
