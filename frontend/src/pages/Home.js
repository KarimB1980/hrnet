import React from 'react'
import { Link } from 'react-router-dom'
import './style/App.css'
import { employeeService } from '../_service/EmployeeService'
import { stateService } from '../_service/StateService'
import { departmentService } from '../_service/DepartmentService'

const Home = () => {

  const states = [
    {
      "label": "Alabama",
      "value": "AL"
    },
    {
      "label": "Alaska",
      "value": "AK"
    },
    {
      "label": "American Samoa",
      "value": "AS"
    },
    {
      "label": "Arizona",
      "value": "AZ"
    },
    {
      "label": "Arkansas",
      "value": "AR"
    },
    {
      "label": "California",
      "value": "CA"
    },
    {
      "label": "Colorado",
      "value": "CO"
    },
    {
      "label": "Connecticut",
      "value": "CT"
    },
    {
      "label": "Delaware",
      "value": "DE"
    },
    {
      "label": "District Of Columbia",
      "value": "DC"
    },
    {
      "label": "Federated States Of Micronesia",
      "value": "FM"
    },
    {
      "label": "Florida",
      "value": "FL"
    },
    {
      "label": "Georgia",
      "value": "GA"
    },
    {
      "label": "Guam",
      "value": "GU"
    },
    {
      "label": "Hawaii",
      "value": "HI"
    },
    {
      "label": "Idaho",
      "value": "ID"
    },
    {
      "label": "Illinois",
      "value": "IL"
    },
    {
      "label": "Indiana",
      "value": "IN"
    },
    {
      "label": "Iowa",
      "value": "IA"
    },
    {
      "label": "Kansas",
      "value": "KS"
    },
    {
      "label": "Kentucky",
      "value": "KY"
    },
    {
      "label": "Louisiana",
      "value": "LA"
    },
    {
      "label": "Maine",
      "value": "ME"
    },
    {
      "label": "Marshall Islands",
      "value": "MH"
    },
    {
      "label": "Maryland",
      "value": "MD"
    },
    {
      "label": "Massachusetts",
      "value": "MA"
    },
    {
      "label": "Michigan",
      "value": "MI"
    },
    {
      "label": "Minnesota",
      "value": "MN"
    },
    {
      "label": "Mississippi",
      "value": "MS"
    },
    {
      "label": "Missouri",
      "value": "MO"
    },
    {
      "label": "Montana",
      "value": "MT"
    },
    {
      "label": "Nebraska",
      "value": "NE"
    },
    {
      "label": "Nevada",
      "value": "NV"
    },
    {
      "label": "New Hampshire",
      "value": "NH"
    },
    {
      "label": "New Jersey",
      "value": "NJ"
    },
    {
      "label": "New Mexico",
      "value": "NM"
    },
    {
      "label": "New York",
      "value": "NY"
    },
    {
      "label": "North Carolina",
      "value": "NC"
    },
    {
      "label": "North Dakota",
      "value": "ND"
    },
    {
      "label": "Northern Mariana Islands",
      "value": "MP"
    },
    {
      "label": "Ohio",
      "value": "OH"
    },
    {
      "label": "Oklahoma",
      "value": "OK"
    },
    {
      "label": "Oregon",
      "value": "OR"
    },
    {
      "label": "Palau",
      "value": "PW"
    },
    {
      "label": "Pennsylvania",
      "value": "PA"
    },
    {
      "label": "Puerto Rico",
      "value": "PR"
    },
    {
      "label": "Rhode Island",
      "value": "RI"
    },
    {
      "label": "South Carolina",
      "value": "SC"
    },
    {
      "label": "South Dakota",
      "value": "SD"
    },
    {
      "label": "Tennessee",
      "value": "TN"
    },
    {
      "label": "Texas",
      "value": "TX"
    },
    {
      "label": "Utah",
      "value": "UT"
    },
    {
      "label": "Vermont",
      "value": "VT"
    },
    {
      "label": "Virgin Islands",
      "value": "VI"
    },
    {
      "label": "Virginia",
      "value": "VA"
    },
    {
      "label": "Washington",
      "value": "WA"
    },
    {
      "label": "West Virginia",
      "value": "WV"
    },
    {
      "label": "Wisconsin",
      "value": "WI"
    },
    {
      "label": "Wyoming",
      "value": "WY"
    }
  ]

  const department = [
    {
      "label": "Sales",
      "value": "Sales"
    },
    {
      "label": "Marketing",
      "value": "Marketing"
    },
    {
      "label": "Engineering",
      "value": "Engineering"
    },
    {
      "label": "Human Resources",
      "value": "Human Resources"
    },
    {
      "label": "Legal",
      "value": "Legal"
    }
  ]

  const createEmployee = () => {
    if (document.getElementById('first-name').value !== '' & document.getElementById('last-name').value !== '' & document.getElementById('date-of-birth').value !== '' & document.getElementById('start-date').value !== '' & document.getElementById('street').value !== '' & document.getElementById('city').value !== '' & document.getElementById('state').value !== '' & document.getElementById('department').value !== '' & document.getElementById('zip-code').value !== '') {
      console.log("save ça marche")
      employeeService.createEmployee()
    }
  }

  const getAllEmployees = () => {
    console.log("Liste des employés ça marche")
    employeeService.getAllEmployees()
  }
  const getAllStates = () => {
    console.log("Liste des états ça marche")
    stateService.getAllStates()
  }

  const getAllDepartments = () => {
    console.log("Liste des départements ça marche")
    departmentService.getAllDepartments()
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee">

          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input type="text" id="date-of-birth" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select>
              {states.map((option) => (
                <option value={option.label} id="state" key={option.label}>{option.label}</option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select>
            {department.map((option) => (
              <option value={option.label} id="department" key={option.label}>{option.label}</option>
            ))}
          </select>
        </form>

        <button onClick={createEmployee}>Save</button>

        <button onClick={getAllEmployees}>Liste des employés</button>
        <button onClick={getAllStates}>Liste des états</button>
        <button onClick={getAllDepartments}>Liste des départements</button>

      </div>
      {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </div>
  );
};

export default Home;