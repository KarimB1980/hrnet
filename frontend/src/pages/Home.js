import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCreateEmployeeMutation } from '../redux/apiSlice'
import styles from './style/Home.module.css'
import Select from 'react-select'
import { Modal } from '@k90891695/modalnpm'
import { useGetAllStatesQuery } from "../redux/apiSlice"
import { useGetAllDepartmentsQuery } from "../redux/apiSlice"

function Home() {

  let [isOpen, setIsOpen] = useState(false)
  let [isOpenError, setIsOpenError] = useState(false)

  let [selectState, setSelectState] = useState('')
  let [selectDepartment, setSelectDepartment] = useState('')

  const [user, setUser] = useState([])

  const handleSubmit = (e) => {
      e.preventDefault()

    if(user.firstName!==undefined & user.lastName!==undefined & ClickBirthDateCalendar!=='Invalid Date' & ClickStartDateCalendar!=='Invalid Date' & Department!==undefined & user.street!==undefined & user.city!==undefined & State!==undefined & user.zipCode!==undefined) {

      console.log('submit')

      let formData = {
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: ClickBirthDateCalendar,
        startDate: ClickStartDateCalendar,
        department: Department,
        street: user.street,
        city: user.city,
        state: State,
        zipCode: user.zipCode,
      }

      addNewEmployee(formData)
        .unwrap()
        .then((payload) => console.log('fulfilled', payload))
        .catch((error) => console.error('rejected', error))

      setIsOpen(true)

    } else {
      setIsOpenError(true)
    }
  }
  
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const [dateOfBirth, setDateOfBirth] = useState('')
  const onNativeBirthdateChange = e => {
    setDateOfBirth(e.target.value);
  };

  const [startDate, setStartDate] = useState('')
  const onNativeStartdateChange = e => {
    setStartDate(e.target.value);
  };

  const ClickBirthDateCalendar = new Date(dateOfBirth).toLocaleDateString()
  const ClickStartDateCalendar = new Date(startDate).toLocaleDateString()

  const [addNewEmployee] = useCreateEmployeeMutation()

  const State = selectState.label
  const Department = selectDepartment.label

  const { data } = useGetAllStatesQuery()
  const [statesData, setStatesData] = useState([])
  useEffect(() => {
    setStatesData(data)
  }, [data])

  const { currentData } = useGetAllDepartmentsQuery()
  const [departmentsData, setDepartmentsData] = useState([])
  useEffect(() => {
    setDepartmentsData(currentData)
  }, [currentData])

  console.log(user.firstName)
  console.log(user.lastName)
  console.log(ClickBirthDateCalendar)
  console.log(ClickStartDateCalendar)
  console.log(Department)
  console.log(State)
  console.log(user.street)
  console.log(user.city)
  console.log(State)
  console.log(user.zipCode)

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" name="createemployee" onSubmit={handleSubmit}>

          <label htmlFor="firstName">First Name</label>
          <input 
            name='firstName'
            type="text" 
            id="firstName" 
            value={user.firstName || ""} 
            onChange={onChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input 
            name='lastName'
            type="text" 
            id="lastName" 
            value={user.lastName || ""} 
            onChange={onChange}
          />

          <label>Date of birth </label>
          <input 
            type="date" 
            name="dateOfBirth" 
            value={dateOfBirth} 
            onChange={onNativeBirthdateChange} 
          />


          <label>Start date</label>
          <input 
            type="date" 
            name="startDate" 
            value={startDate} 
            onChange={onNativeStartdateChange} 
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input 
              name='street'
              id="street" 
              type="text" 
              value={user.street || ""} 
              onChange={onChange}
            />

            <label htmlFor="city">City</label>
            <input 
              name='city'
              id="city" 
              type="text" 
              value={user.city || ""} 
              onChange={onChange}
            />

            <label htmlFor="data-state">State</label>
            <Select
              className='data-state'
              classNamePrefix='selectState'
              options={statesData}
              onChange={setSelectState}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input 
              name='zipCode'
              id="zipCode" 
              type="number" 
              value={user.zipCode || ""} 
              onChange={onChange}
            />
          </fieldset>

          <label htmlFor="data-department">Department</label>
          <Select
            className='data-department'
            classNamePrefix='selectDepartment'
            options={departmentsData}
            onChange={setSelectDepartment}
          />

          <button className={styles.primaryBtn} id='save' type="submit">Save</button>
          {isOpen && <Modal setIsOpen={() => {setIsOpen(); window.location.reload(false)}} color={'#d0fefd'} information={'Information'} commentary={'Employee Created !'} action={'Close'} />}
          {isOpenError && <Modal setIsOpen={setIsOpenError} color={'#fecccc'} information={'Information'} commentary={'Employee Not Created ! Please complete all fields.'} action={'Close'} />}

        </form>

      </div>
    </div>
  )
}

export default Home