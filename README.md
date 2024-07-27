# FoodPanda Clone

Welcome to the **FoodPanda Clone** project! This project is a replica of the popular food delivery service, **FoodPanda**, built using the MERN stack (MongoDB, Express.js, React, Node.js). It offers a comprehensive, full-stack solution for browsing restaurants, placing orders, and managing user accounts.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Project Overview

The **FoodPanda Clone** project is a web application that replicates the core functionalities of FoodPanda, allowing users to view menus, add items to a cart, and place orders. This project serves as a practical demonstration of using the MERN stack to create a dynamic and responsive web application.

## Features

- **User Authentication**: Register and log in to access personalized features and order history.
- **Order Management**: Add items to the cart and proceed with a seamless checkout process.
- **Responsive Design**: Enjoy a consistent user experience across different devices.
- **Real-time Updates**: Dynamic updates using React for a smooth user experience.

## Technologies Used

- **Frontend**:
  - **React.js**: For building the user interface and handling state management.
  - **CSS3**: For styling the application with responsive and modern design.

- **Backend**:
  - **Node.js**: For server-side scripting.
  - **Express.js**: As a web application framework to handle routes and middleware.

- **Database**:
  - **MongoDB**: For storing user data, restaurant details, and orders.
  - **Mongoose**: As an ODM to interact with MongoDB.

## Installation

To set up the FoodPanda Clone project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MahnoorYasin/ProgrammersTech_Task4_FoodPanda_Clone.git
   cd ProgrammersTech_Task4_FoodPanda_Clone
   ```

2. **Install Dependencies**

   - **Backend Dependencies**:

     ```bash
     cd backend
     npm install
     ```

   - **Frontend Dependencies**:

     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory and add the following environment variables:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB URI and `your_jwt_secret_key` with a secure key for JWT authentication.

4. **Start the Application**

   - **Backend**:

     ```bash
     cd backend
     npx nodemon 
     ```

   - **Frontend**:

     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the FoodPanda Clone.
   
## Usage

1. **Register/Login**: Create an account or log in to access personalized features.
2. **Browse Restaurants**: Explore available restaurants and their menus.
3. **Manage Cart**: Add items to your cart and view cart contents.
4. **Place Orders**: Proceed to checkout and place your order with ease.
