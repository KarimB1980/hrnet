import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Select from "react-select"
import { useCreateEmployeeMutation } from '../redux/apiSlice'
import { Modal } from '@k90891695/modalnpm'
import { useGetAllStatesQuery } from "../redux/apiSlice"
import { useGetAllDepartmentsQuery } from "../redux/apiSlice"

// yup schema creation
const EmployeeSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    dateOfBirth: yup.string().required(),
    startDate: yup.string().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    state: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
    }),
    zipCode: yup.number().required(),
    department: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
    }),
  })
  .required()

// creation of the homepage  
const Home = () => {
  // useform properties
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmployeeSchema),
  })

  // code following a click on the "save" button
  const onSubmit = (data) => {
    // convert dates to dd/mm/yyyy format
    const ClickBirthDateCalendar = new Date(data.dateOfBirth).toLocaleDateString()
    const ClickStartDateCalendar = new Date(data.startDate).toLocaleDateString()

    // format of the data to send to the API
    const FormData = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: ClickBirthDateCalendar,
      startDate: ClickStartDateCalendar,
      street: data.street,
      city: data.city,
      state: data.state.label,
      zipCode: data.zipCode,
      department: data.department.label
    }

    // send data to API
    addNewEmployee(FormData)
      .unwrap()
      .then((payload) => console.log('fulfilled', payload))
      .catch((error) => console.error('rejected', error))

    // open the modal
    setIsOpen(true)

    // form reset
    reset(formValues => ({
      ...formValues,
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      startDate: null,
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    }))
  }

  // recovery of states
  const { data } = useGetAllStatesQuery()
  // recovery of departments
  const { currentData } = useGetAllDepartmentsQuery()
  // creating a new employee
  const [addNewEmployee] = useCreateEmployeeMutation()
  // open/close the modal
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              className='FirstName'
              {...register("firstName")}
            />
            {errors.firstName && <p>This is required</p>}
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              className="LastName"
              {...register("lastName")}
            />
            {errors.lastName && <p>This is required</p>}
          </div>

          <div className="dateOfBirth">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              className="DateOfBirth"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && <p>This is required</p>}
          </div>

          <div className="startDate">
            <label htmlFor="startDate">Start date</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              className="StartDate"
              {...register("startDate")}
            />
            {errors.startDate && <p>This is required</p>}
          </div>

          <fieldset className="address">
            <legend>Address</legend>
            <div className="street">
              <label htmlFor="Street">Street</label>
              <input
                id="Street"
                name="Street"
                className="Street"
                {...register("street")}
              />
              {errors.street && <p>This is required</p>}
            </div>

            <div className="city">
              <label htmlFor="City">City</label>
              <input
                id="City"
                name="City"
                className="City"
                {...register("city")}
              />
              {errors.city && <p>This is required</p>}
            </div>

            <div className="state">
              <label htmlFor="state">State</label>
              <Controller
                name="state"
                className='State'
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      inputId="state"
                      placeholder={<div className="select-state-placeholder-text">Select state...</div>}
                      {...field}
                      options={data}
                    />
                  );
                }}
              />
              {errors.state && <p>This is required</p>}
            </div>

            <div className="zipCode">
              <label htmlFor="ZipCode">Zip Code</label>
              <input
                id="ZipCode"
                name="ZipCode"
                className='ZipCode'
                type="number"
                {...register("zipCode")}
              />
              {errors.zipCode && <p>This is required</p>}
            </div>
          </fieldset>

          <div className="department">
            <label htmlFor="department">Department</label>
            <Controller
              name="department"
              className="Department"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    inputId="department"
                    placeholder={<div className="select-department-placeholder-text">Select department...</div>}
                    classNamePrefix="DepartmentSelect"
                    {...field}
                    options={currentData}
                  />
                );
              }}
            />
            {errors.department && <p>This is required</p>}
          </div>

          <input className="submit" type="submit" value={'Save'} />
          {isOpen && <Modal setIsOpen={() => { setIsOpen(); }} color={'#d0fefd'} information={'Information'} commentary={'Employee Created !'} action={'Close'} />}

        </form>
      </div>
    </>
  )
}

export default Home