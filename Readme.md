# Simple Ecommerce API

This repository provides a basic boilerplate for creating a REST API using Express and MongoDB. The repository includes the necessary dependencies and a pre-defined folder structure to get you up and running smoothly.

## Table of Contents
1. [Basic Requirements](#basic-requirements)
2. [Getting Started](#getting-started)
3. [Database](#database)
4. [Application Structure](#application-structure)
5. [API Overview](#api-overview)
6. [Authentication and Authorization](#authentication-and-authorization)
7. [Error Handling](#error-handling)

## Basic Requirements

To run this API, you need to have the following software installed on your machine:

- [Node.js](https://nodejs.org) (version >= 12.0.0)
- [MongoDB](https://www.mongodb.com/) (either a local installation or an online database service)

## Getting Started

To install and run this repository, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/Genics-API.git
   ```

2. Change into the project directory:

   ```bash
   cd Genics-API
   ```

3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory of the project and specify the following environment variables:

   ```
   PORT=5000
   MONGO_DB=<your-mongodb-uri>
   ```

   Replace `<your-mongodb-uri>` with the connection URI for your MongoDB database.

5. Start the application by running the following command:

   ```bash
   npm start
   ```

   The API will now be running at `http://localhost:5000`.

## Database

This API uses MongoDB as its database. You can either set up a local MongoDB installation or use an online database service such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). To connect to your database, provide the MongoDB connection URI in the `.env` file as mentioned in the Getting Started section.

## Application Structure

The folder structure of this repository follows a recommended best practice for organizing Express applications:

```
├── controllers/       # Contains route handlers (controllers)
├── models/            # Defines the data models (Mongoose schemas)
├── routes/            # Defines the API routes
├── index.js           # Entry point of the application
├── .env               # Environment variables (ignored by version control)
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

Some additional directories may be present depending on the requirements of the project:

- The `controllers` directory contains route handlers responsible for handling requests and returning responses.
- The `models` directory defines the data models using Mongoose schemas, which map to MongoDB collections.
- The `routes` directory defines the API routes and associates them with the appropriate controller methods.
- The `services` directory contains business logic and interactions with the database.
- The `middlewares` directory holds custom middleware functions used in the application.
- The `utils` directory includes utility functions that can be used throughout the project.
- The `tests` directory contains unit tests.
- The `index.js` file is the entry point of the application where Express is initialized.
- The `config.js` file stores configuration variables.
- The `.env` file should be created and populated with environment-specific variables as mentioned in the Getting Started section.
- The `package.json` file lists the project dependencies

## API Overview

The API provides endpoints for managing users and products in a simple ecommerce application. Here is a brief overview of the available endpoints:

- **Users**
  - `GET /users`: Retrieve a list of all users.
  - `POST /users`: Create a new user.

- **Products**
  - `GET /products`: Retrieve a list of all products.
  - `POST /products`: Create a new product.
  - `PUT /products/:id`: Update an existing product by ID.
  - `DELETE /products/:id`: Delete a product by ID.

For detailed information about the request and response format for each endpoint, please refer to the individual route files in the `routes` directory.

## Authentication and Authorization

This API does not currently implement authentication or authorization mechanisms. It is designed for demonstrate basic REST API concepts. In a production environment, it is important to implement proper authentication and authorization mechanisms to secure your API endpoints.

## Error Handling

The API includes basic error handling for common scenarios. Errors are returned in a consistent JSON format with appropriate HTTP status codes. However, this error handling is not exhaustive, and additional error cases can be implemented as needed for your specific application requirements.
