import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useCreateEmployeeMutation } from '../redux/apiSlice'
import { Modal } from '@k90891695/modalnpm'
import { useGetAllStatesQuery } from "../redux/apiSlice"
import { useGetAllDepartmentsQuery } from "../redux/apiSlice"

const SignupSchema = yup
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
    zipCode: yup.string().required(),
    department: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
    }),
  })
  .required();

const Home = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {

    const ClickBirthDateCalendar = new Date(data.dateOfBirth).toLocaleDateString()
    const ClickStartDateCalendar = new Date(data.startDate).toLocaleDateString()

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
    console.log(FormData)

    addNewEmployee(FormData)
      .unwrap()
      .then((payload) => console.log('fulfilled', payload))
      .catch((error) => console.error('rejected', error))

    setIsOpen(true)

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
  };

  const { data } = useGetAllStatesQuery()
  const { currentData } = useGetAllDepartmentsQuery()

  const [addNewEmployee] = useCreateEmployeeMutation()

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
            <label>First Name</label>
            <input
              className='FirstName'
              {...register("firstName")}
            />
            {errors.firstName && <p>This is required</p>}
          </div>

          <div className="lastName">
            <label>Last Name</label>
            <input
              className="LastName"
              {...register("lastName")}
            />
            {errors.lastName && <p>This is required</p>}
          </div>

          <div className="dateOfBirth">
            <label>Date of birth</label>
            <input
              type="date"
              className="DateOfBirth"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && <p>This is required</p>}
          </div>

          <div className="startDate">
            <label>Start date</label>
            <input
              type="date"
              className="StartDate"
              {...register("startDate")}
            />
            {errors.startDate && <p>This is required</p>}
          </div>

          <fieldset className="address">
            <legend>Address</legend>
            <div className="street">
              <label>Street</label>
              <input
                className="Street"
                {...register("street")}
              />
              {errors.street && <p>This is required</p>}
            </div>

            <div className="city">
              <label>City</label>
              <input
                className="City"
                {...register("city")}
              />
              {errors.city && <p>This is required</p>}
            </div>

            <div className="state">
              <label>State</label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      options={data}
                    />
                  );
                }}
              />
              {errors.state && <p>This is required</p>}
            </div>

            <div className="zipCode">
              <label>Zip Code</label>
              <input
                className='ZipCode'
                {...register("zipCode")}
              />
              {errors.zipCode && <p>This is required</p>}
            </div>
          </fieldset>

          <div className="department">
            <label>Department</label>
            <Controller
              name="department"
              className="department"
              control={control}
              render={({ field }) => {
                return (
                  <Select
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
  );
}

export default Home;