import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/App.css'
import { employeeService } from '../_service/EmployeeService'
import SelectDepartment from '../components/Departments'
import SelectState from '../components/States'
import CalendarDate from '../components/Calendar'

import { Modal } from '@k90891695/modalnpm'

import styles from './style/Home.module.css';

// Creation of the home page
const Home = () => {
  const createEmployee = () => {
    if (document.getElementById('first-name').value !== '' & document.getElementById('last-name').value !== '' & document.getElementById('date-of-birth').value !== '' & document.getElementById('start-date').value !== '' & document.getElementById('street').value !== '' & document.getElementById('city').value !== '' & document.getElementsByClassName('selectState__single-value').value !== '' & document.getElementsByClassName('selectDepartement__single-value').value !== '' & document.getElementById('zip-code').value !== '') {
      employeeService.createEmployee()
      setIsOpen(true);
    }
  }

  const [showBirthCalendar, setShowBirthCalendar] = useState(true);
  const [showStartCalendar, setShowStartCalendar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
          <input type="text" id="date-of-birth" onClick={() => setShowBirthCalendar(!showBirthCalendar)} />
          {!showBirthCalendar &&
            <CalendarDate clickDateCalendar={document.getElementById('date-of-birth')}/>
          }
          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" onClick={() => setShowStartCalendar(!showStartCalendar)} />
          {!showStartCalendar &&
            <CalendarDate clickDateCalendar={document.getElementById('start-date')}/>
          }
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <SelectState />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <SelectDepartment />
        </form>

        <button className={styles.primaryBtn} id='save' onClick ={createEmployee}>Save</button>
        {isOpen && <Modal setIsOpen={setIsOpen} color={'#d0fefd'} information={'Information'} commentary={'Employee Created !'} action={'Close'} />}

      </div>
    </div>
  )
}

export default Home;