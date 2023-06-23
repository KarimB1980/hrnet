import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCreateEmployeeMutation } from '../redux/apiSlice'
import styles from './style/Home.module.css'
import Select from 'react-select'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Modal } from '@k90891695/modalnpm'

import { useGetAllStatesQuery } from "../redux/apiSlice"
import { useGetAllDepartmentsQuery } from "../redux/apiSlice"

import { useForm } from "react-hook-form";

function Home() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  console.log(errors);

  let formSubmitError
  let [isOpen, setIsOpen] = useState(false)
  let [showBirthCalendar, setShowBirthCalendar] = useState(true)
  let [showStartCalendar, setShowStartCalendar] = useState(true)
  let [startDate, setStartDate] = useState('')
  let [selectState, setSelectState] = useState('')
  let [dateOfBirth, setDateOfBirth] = useState('')
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

  const [addNewEmployee] = useCreateEmployeeMutation()

  const onSubmit = (data, e) => {
    e.preventDefault()
    const { firstName, lastName, dateOfBirth, startDate, street, city, zipCode } = e.target.elements

    let formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: Department,
      street: street.value,
      city: city.value,
      state: State,
      zipCode: zipCode.value,
    }

    addNewEmployee(formData)
    .unwrap()
    .then((payload) => console.log('fulfilled', payload))
    .catch((error) => console.error('rejected', error))

    setIsOpen(true)

    reset({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      department: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
    })
  }

  const State = selectState.label
  const Department = selectDepartment.label

  const {data} = useGetAllStatesQuery()
  const [statesData, setStatesData] = useState([])
  useEffect(() => {
    setStatesData(data)
  }, [data])

  const {currentData} = useGetAllDepartmentsQuery()
  const [departmentsData, setDepartmentsData] = useState([])
  useEffect(() => {
    setDepartmentsData(currentData)
  }, [currentData])

  return (
    <div>
      {formSubmitError}
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" name="createemployee" onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register("firstName", { required: true })} />
          {errors.firstName && <p>This is required</p>}

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && <p>This is required</p>}

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="text" id="dateOfBirth" {...register("dateOfBirth", { required: true })}
            onClick={() => setShowBirthCalendar(!showBirthCalendar)} 
            value={clickBirthDateCalendar() || ''} 
            onChange={(e)=>setClickBirthDateCalendar(e.target.value)} 
          />
          {errors.dateOfBirth && <p>This is required</p>}
          {!showBirthCalendar &&
            <Calendar onChange={setDateOfBirth} value={dateOfBirth}/>
          }

          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="text" {...register("startDate", { required: true })}
            onClick={() => setShowStartCalendar(!showStartCalendar)} 
            value={clickStartDateCalendar() || ''} 
            onChange={(e)=>setClickStartDateCalendar(e.target.value)} 
          />
          {errors.startDate && <p>This is required</p>}
          {!showStartCalendar &&
            <Calendar onChange={setStartDate} value={startDate}/>
          }

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" {...register("street", { required: true })}/>
            {errors.street && <p>This is required</p>}

            <label htmlFor="city">City</label>
            <input id="city" type="text" {...register("city", { required: true })}/>
            {errors.city && <p>This is required</p>}

            <h3>State</h3>
            <Select 
              className='data-state'
              classNamePrefix='selectState'
              options={statesData}
              onChange={setSelectState}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number" {...register("zipCode", { required: true })}/>
            {errors.zipCode && <p>This is required</p>}
          </fieldset>

          <h3>Department</h3>
          <Select 
            className='data-department'
            classNamePrefix='selectDepartment'
            options={departmentsData}
            onChange={setSelectDepartment}
          />

          <button className={styles.primaryBtn} id='save' type="submit">Save</button>
          {isOpen && <Modal setIsOpen={setIsOpen} color={'#d0fefd'} information={'Information'} commentary={'Employee Created !'} action={'Close'}/>}
        </form>

      </div>
    </div>
  )
}

export default Home