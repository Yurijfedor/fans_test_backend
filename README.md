<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS Backend Application

This is a simple backend application built with NestJS, Sequelize, and MySQL. It includes JWT authentication and basic CRUD operations for a user entity.

## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Prerequisites

- Node.js (version 20.10.0)
- MySQL server

### Installation

1. **Clone the repository:**
   git clone https://github.com/yourusername/nestjs-backend.git

2. Navigate to the project directory:
   cd nestjs-backend

3. Install dependencies:
   npm install

4. Create a .env file:
   Copy the example .env file and update the values with your own configuration:
   cp .env.example .env

Edit the .env file with your MySQL password and JWT secret:
JWT_SECRET=SuperSecretKey12345
MYSQL_PASSWORD=Your_password

5. Start the application:
   npm run start

## API Endpoints

### POST /api/v1/add-user - Create a new user

Request Body:
{
"name": "John Doe",
"email": "john.doe@example.com",
"phone": "+1234567890"
}
Response:
{
"id": 1,
"name": "John Doe",
"email": "john.doe@example.com",
"phone": "+1234567890",
"password": "$2b$10$RQLjXjT7O4ybpULUVsruyOjr3WKql412LTlIA8iBQJ1q7tvZhVqP.",
"updatedAt": "2024-09-08T08:29:35.280Z",
"createdAt": "2024-09-08T08:29:35.280Z"
}

### GET /api/v1/get-user/:id - Retrieve a user by ID

Response:
{
"id": 1,
"name": "John Doe",
"email": "john.doe@example.com",
"phone": "+1234567890"
}

### GET /api/v1/auth/login - Get an authorization token

Request Body:
{
"name": "John Doe",
"password": "123456"
}

Response:
{
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzI1Nzg0OTE5LCJleHAiOjE3MjU3ODUwOTl9.Rti5beM8al47qloanRzu6vqzT-Ac_MR0Z4AnfTMsuxw"
}

## Authentication

To access protected routes, include a JWT token in the Authorization header of your requests:

Authorization: Bearer <your_jwt_token>
