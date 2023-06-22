import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/App.css'
import { employeeService } from '../_service/EmployeeService'
import Select from 'react-select'
import { stateService } from '../_service/StateService'
import { departmentService } from '../_service/DepartmentService'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Modal } from '@k90891695/modalnpm'
import styles from './style/Home.module.css';

const dataState = await stateService.getAllStates()
const dataS = dataState.data

const dataDepartment = await departmentService.getAllDepartments()
const dataD = dataDepartment.data

// Creation of the home page
const Home = () => {
  const createEmployee = () => {
    if (localStorage.getItem('firstName') !== '' & localStorage.getItem('lastName') !== '' & localStorage.getItem('dateOfBirth') !== 'undefined' & localStorage.getItem('startDate') !== 'undefined' & localStorage.getItem('street') !== '' & localStorage.getItem('city') !== '' & localStorage.getItem('selectState') !== 'undefined' & localStorage.getItem('selectDepartment') !== 'undefined' & localStorage.getItem('zipCode') !== '') {
      employeeService.createEmployee()

      firstName = ''
      lastName = ''
      dateOfBirth = ''
      startDate = ''
      street = ''
      city = ''
      selectState = ''
      zipCode = ''
      selectDepartment = ''

      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
      localStorage.removeItem('dateOfBirth')
      localStorage.removeItem('startDate')
      localStorage.removeItem('street')
      localStorage.removeItem('city')
      localStorage.removeItem('selectState')
      localStorage.removeItem('zipCode')
      localStorage.removeItem('selectDepartment')

      localStorage.clear()

      document.createemployee.reset();

      setIsOpen(true)

    }
  }

  let [showBirthCalendar, setShowBirthCalendar] = useState(true)
  let [showStartCalendar, setShowStartCalendar] = useState(true)
  let [isOpen, setIsOpen] = useState(false)
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [dateOfBirth, setDateOfBirth] = useState('')
  let [startDate, setStartDate] = useState('')
  let [street, setStreet] = useState('')
  let [city, setCity] = useState('')
  let [selectState, setSelectState] = useState('')
  let [zipCode, setZipCode] = useState('')
  let [selectDepartment, setSelectDepartment] = useState('')

  let [clickBirthDateCalendar, setClickBirthDateCalendar] = useState('')
  clickBirthDateCalendar = () => {
    if(dateOfBirth) {
      const ClickBirthDateCalendar =   new Date(dateOfBirth).toLocaleDateString()
      return ClickBirthDateCalendar
    }
  }
  
  let [clickStartDateCalendar, setClickStartDateCalendar] = useState('')
  clickStartDateCalendar = () => {
    if(startDate) {
      const ClickStartDateCalendar =   new Date(startDate).toLocaleDateString()
      return ClickStartDateCalendar
    }
  }

  localStorage.setItem('firstName',firstName)
  localStorage.setItem('lastName',lastName)
  localStorage.setItem('dateOfBirth',clickBirthDateCalendar())
  localStorage.setItem('startDate',clickStartDateCalendar())
  localStorage.setItem('street',street)
  localStorage.setItem('city',city)
  localStorage.setItem('selectState',selectState.label)
  localStorage.setItem('zipCode',zipCode)
  localStorage.setItem('selectDepartment',selectDepartment.label)

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" name="createemployee">

          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" value={firstName} onChange={e=>setFirstName(e.target.value)} />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" value={lastName} onChange={e=>setLastName(e.target.value)} />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input type="text" id="date-of-birth" 
            onClick={() => setShowBirthCalendar(!showBirthCalendar)} 
            value={clickBirthDateCalendar() || ''} 
            onChange={(e)=>setClickBirthDateCalendar(e.target.value)} 
          />
          {!showBirthCalendar &&
            <Calendar onChange={setDateOfBirth} value={dateOfBirth}/>
          }
          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" 
            onClick={() => setShowStartCalendar(!showStartCalendar)} 
            value={clickStartDateCalendar() || ''} 
            onChange={(e)=>setClickStartDateCalendar(e.target.value)} 
          />
          {!showStartCalendar &&
            <Calendar onChange={setStartDate} value={startDate}/>
          }
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" value={street} onChange={e=>setStreet(e.target.value)} />

            <label htmlFor="city">City</label>
            <input id="city" type="text"  value={city} onChange={e=>setCity(e.target.value)} />

            <h3>State</h3>
            <Select 
              className='data-state'
              classNamePrefix='selectState'
              options={dataS} 
              onChange={setSelectState}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" value={zipCode} onChange={e=>setZipCode(e.target.value)} />
          </fieldset>

          <h3>Department</h3>
          <Select 
            className='data-department'
            classNamePrefix='selectDepartment'
            options={dataD} 
            onChange={setSelectDepartment}
          />
        </form>

        <button className={styles.primaryBtn} id='save' onClick ={createEmployee}>Save</button>
        {isOpen && <Modal setIsOpen={setIsOpen} color={'#d0fefd'} information={'Information'} commentary={'Employee Created !'} action={'Close'} />}

      </div>
    </div>
  )
}

export default Home;