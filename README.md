[![forthebadge](./frontend/public/framework-react-18.svg)](https://forthebadge.com)
[![forthebadge](./frontend/public/node-js-v18.16.0.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

# Available Scripts

## This backend use MongoDB database
## You must install the dependencies in the directory "backend" and start the backend with :

### Go to backend directory
cd backend

### Install dependencies
npm install

### In the file .env.example, set your database to DATABASE_URL= parameter
Rename the file .env.example to .env

### Start local dev server
npm run dev:server

### Populate database with states and departments
npm run populate-db


## You must install the dependencies in the directory "frontend" and start the frontend with :

### Go to frontend directory
cd frontend

### Install dependencies
npm install

### Start the frontend
npm start


### Runs the frontend in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

## API information
You can use :  
[http://localhost:3000/api/state](http://localhost:3000/api/state) to view all states in your browser.  
[http://localhost:3000/api/department](http://localhost:3000/api/departments) to view all departments in your browser.  
[http://localhost:3000/api/employee](http://localhost:3000/api/employee) to view all employees in your browser.  