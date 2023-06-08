import React from 'react'
import { Link } from 'react-router-dom'
import './style/App.css'
import GetEmployeesAPIData from '../components/Employees'

// Creation of the employees list page
const EmployeeList = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <GetEmployeesAPIData/>
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList