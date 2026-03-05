# Node.js User Management API

A simple REST API built with Node.js using the native HTTP module
(without Express).\
The API performs CRUD operations for managing users and stores data in a
JSON file.

This project demonstrates how to build a backend API using pure Node.js
and basic file-based storage.

------------------------------------------------------------------------

## Features

-   Get all users
-   Get user by ID
-   Create a new user
-   Update an existing user
-   Delete a user
-   Unique ID generation using `crypto.randomUUID()`
-   JSON file data storage
-   Built without external frameworks

------------------------------------------------------------------------

## Tech Stack

-   Node.js
-   Native HTTP module
-   File System (fs)
-   JSON file storage

------------------------------------------------------------------------

## Project Structure

project
│
├── server.js
├── Controller
│ └── userController.js
├── model
│ └── userModel.js
├── data
│ └── user.json
└── util.js

------------------------------------------------------------------------

## API Endpoints

### Get All Users

GET /user

### Get User By ID

GET /user/:id

Example: GET /user/1

------------------------------------------------------------------------

### Create User

POST /user/create

Example Body:

{ "userName": "John Doe", "userEmail": "john@example.com", "userAge":
30, "phoneNumber": "+251912345678", "gender": "Male", "address": "Bole
Road", "city": "Addis Ababa", "country": "Ethiopia" }

------------------------------------------------------------------------

### Update User

PUT /user/update/:id

Example: PUT /user/update/1

------------------------------------------------------------------------

### Delete User

DELETE /user/delete/:id

Example: DELETE /user/delete/1

------------------------------------------------------------------------

## Example User Object

{ "userUniqueId": "1", "userName": "James Lewis", "userEmail":
"james.lewis1@example.com", "userAge": 29, "phoneNumber":
"+404-727-4381060", "gender": "Male", "address": "361 Maple Ave",
"city": "Addis Ababa", "country": "Ethiopia", "createdAt":
"2026-01-02T09:00:00Z" }

------------------------------------------------------------------------

## Running the Project

Install dependencies

npm install

Start the server

node server.js

Server runs at: http://localhost:3000

------------------------------------------------------------------------

## Learning Goals

This project helps understand:

-   How Node.js HTTP servers work
-   Building REST APIs without frameworks
-   Handling requests and responses
-   Working with JSON data
-   Basic backend architecture (Controller / Model pattern)

------------------------------------------------------------------------

## License

MIT
