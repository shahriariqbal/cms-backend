# Simplified Certificate Management System - Backend

This project is a simple Express.js application for managing digital certificates. It follows the MVC (Model-View-Controller) pattern and uses SQLite for the database. The project also includes a test suite using Jest and API documentation using Swagger.

## Prerequisites

- Node.js
- npm

## Setup

1. **Clone the repository**:

```bash
git clone https://github.com/shahriariqbal/cms-backend
cd cms-backend
```

2. **Install the dependencies**:

```bash
npm install
```

## Running the Application

To start the application, run `npm start`. The application will start and listen on port 3000. You can access it at `http://localhost:3000`.

## Database

The application uses SQLite for the database. The database file is `mydb.sqlite3` located in the project root directory.

## Testing

To run the tests, use the command

```bash
npm test
```

## API Documentation

The API documentation is generated using Swagger. You can view the API documentation by navigating to `http://localhost:3000/api` in your web browser.
