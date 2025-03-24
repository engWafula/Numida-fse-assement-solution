# Loan Application API and Web App

## Overview

This repository contains a Loan Application API built with Flask and GraphQL, along with a React frontend that allows users to view loans, make payments, and see payment statuses. The application categorizes loan payments based on their timeliness and provides a user-friendly interface for managing loans.

## Repository Structure

- **server/**: Contains the backend code for the Loan Application API.
  - `app.py`: Main application file that sets up the Flask server and GraphQL schema.
  
- **web/**: Contains the frontend code for the Loan Application web app.
  - `src/`: Main source directory for the React application.
    - `components/`: Contains reusable React components.
      - `LoanCard/`: Displays loan details and payment status.
      - `NewPayment/`: Form for adding new payments.
      - `Loader/`: Displays a loading indicator.
      - `Error/`: Displays error messages.
    - `App.tsx`: Main application component that fetches loans and handles payment submissions.
    - `main.tsx`: Entry point for the React application.

## Features

- **GraphQL API**: Exposes loans and their payment statuses.
- **Payment Categorization**: Classifies payments as "On Time", "Late", "Defaulted", or "Unpaid".
- **User Interface**: Provides a clean and responsive UI for managing loans and payments.
- **Error Handling**: Basic error handling for API calls and user interactions.

## Requirements

- Python 3.x
- Node.js and npm
- Flask
- Flask-GraphQL
- Flask-CORS
- Graphene
- React
- Apollo Client

## Installation

### Backend (Server)

1. Navigate to the `server/` directory:
   ```bash
   cd server
   ```

2. Build and run the backend using Docker Compose:
   ```bash
   docker compose up --build
   ```

   The server will start on `http://localhost:5000/graphql`.

### Frontend (Web App)

1. Navigate to the `web/` directory:
   ```bash
   cd web
   ```

2. Install the required Node packages:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm run dev
   ```

   The web app will be available at `http://localhost:3000`.

## Running Tests

To run the tests for the server, you can use Docker Compose. Follow these steps:

1. Navigate to the `server/` directory:
   ```bash
   cd server
   ```

2. Run the tests using the following command:
   ```bash
   docker compose run --rm  server sh -c "python -m unittest test_app.py"
   ```

   This command will execute the tests defined in `test_app.py` and provide you with the results.

## Usage

- Access the GraphQL API at `http://localhost:5000/graphql` to test queries.
- Use the web app to view existing loans, add new payments, and see the payment statuses.

## Acknowledgments

- [Flask Documentation](https://flask.palletsprojects.com/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
