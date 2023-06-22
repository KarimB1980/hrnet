// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './style/App.css'
// // import { employeeService } from '../_service/EmployeeService'
// import Select from 'react-select'
// import { stateService } from '../_service/StateService'
// import { departmentService } from '../_service/DepartmentService'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import { Modal } from '@k90891695/modalnpm'
// import styles from './style/Home.module.css';

// import { useCreateEmployeeMutation } from '../redux/apiSlice';

// // import { connect } from 'react-redux';
// // import { Field, reduxForm, formValueSelector } from 'redux-form';


// const dataState = await stateService.getAllStates()
// const dataS = dataState.data
// console.log(dataS)

// const dataDepartment = await departmentService.getAllDepartments()
// const dataD = dataDepartment.data
// console.log(dataD)

// // Creation of the home page
// const Home = () => {

//   const [showBirthCalendar, setShowBirthCalendar] = useState(true)
//   const [showStartCalendar, setShowStartCalendar] = useState(true)
//   const [isOpen, setIsOpen] = useState(false)
  
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [dateOfBirth, setDateOfBirth] = useState('')
//   const [startDate, setStartDate] = useState('')
//   const [street, setStreet] = useState('')
//   const [city, setCity] = useState('')
//   const [selectState, setSelectState] = useState('')
//   const [zipCode, setZipCode] = useState('')
//   const [selectDepartment, setSelectDepartment] = useState('')
//   const [createEmployee] = useCreateEmployeeMutation()


//   let [clickBirthDateCalendar, setClickBirthDateCalendar] = useState('')
//   clickBirthDateCalendar = () => {
//     if(dateOfBirth) {
//       const ClickBirthDateCalendar =   new Date(dateOfBirth).toLocaleDateString()
//       return ClickBirthDateCalendar
//     }
//   }
  
//   let [clickStartDateCalendar, setClickStartDateCalendar] = useState('')
//   clickStartDateCalendar = () => {
//     if(startDate) {
//       const ClickStartDateCalendar =   new Date(startDate).toLocaleDateString()
//       return ClickStartDateCalendar
//     }
//   }

//   const handleSubmit = () => {
//     const formData = {
//       firstName,
//       lastName,
//       clickBirthDateCalendar,
//       clickStartDateCalendar,
//       street,
//       city,
//       selectState,
//       zipCode,
//       selectDepartment
//     }
//     console.log(formData)

//     createEmployee(formData)
//       .unwrap()
//       .then(() => {
//           // Alert.alert("User created");
//           setFirstName('');
//           setLastName('')
//           setClickBirthDateCalendar('')
//           setClickStartDateCalendar('')
//           setStreet('')
//           setCity('')
//           setSelectState('')
//           setZipCode()
//           setSelectDepartment()
//         })
//         .catch(() =>
//           err => console.log(err),
//         );
//     // onClose();
//     setFirstName('');
//     setLastName('')
//     setClickBirthDateCalendar('')
//     setClickStartDateCalendar('')
//     setStreet('')
//     setCity('')
//     setSelectState('')
//     setZipCode()
//     setSelectDepartment()
//   };

//   return (
//     <div>
//       <div className="title">
//         <h1>HRnet</h1>
//       </div>
//       <div className="container">
//         <Link to="/employee-list">View Current Employees</Link>
//         <h2>Create Employee</h2>
//         <form id="create-employee" name="createemployee">

//           <label htmlFor="first-name">First Name</label>
//           <input 
//             type="text" 
//             id="first-name" 
//             value={firstName} 
//             onChange={setFirstName()} 
//           />

//           <label htmlFor="last-name">Last Name</label>
//           <input 
//             type="text" 
//             id="last-name" 
//             value={lastName} 
//             onChange={setLastName()} />

//           <label htmlFor="date-of-birth">Date of Birth</label>
//           <input type="text" id="date-of-birth" 
//             onClick={() => setShowBirthCalendar(!showBirthCalendar)} 
//             value={clickBirthDateCalendar() || ''} 
//             onChange={setClickBirthDateCalendar()} 
//           />
//           {!showBirthCalendar &&
//             <Calendar onChange={setDateOfBirth} value={dateOfBirth}/>
//           }
//           <label htmlFor="start-date">Start Date</label>
//           <input id="start-date" type="text" 
//             onClick={() => setShowStartCalendar(!showStartCalendar)} 
//             value={clickStartDateCalendar() || ''} 
//             onChange={setClickStartDateCalendar()} 
//           />
//           {!showStartCalendar &&
//             <Calendar onChange={setStartDate} value={startDate}/>
//           }
//           <fieldset className="address">
//             <legend>Address</legend>

//             <label htmlFor="street">Street</label>
//             <input 
//               id="street" 
//               type="text" 
//               value={street} 
//               onChange={setStreet()} 
//             />

//             <label htmlFor="city">City</label>
//             <input 
//               id="city" 
//               type="text"  
//               value={city} 
//               onChange={setCity()} />

//             <h3>State</h3>
//             <Select 
//               className='data-state'
//               classNamePrefix='selectState'
//               options={dataS} 
//               onChange={setSelectState}
//             />

//             <label htmlFor="zip-code">Zip Code</label>
//             <input 
//               id="zip-code" 
//               type="number" 
//               value={zipCode} 
//               onChange={setZipCode()} />
//           </fieldset>

//           <h3>Department</h3>
//           <Select 
//             className='data-department'
//             classNamePrefix='selectDepartment'
//             options={dataD} 
//             onChange={setSelectDepartment}
//           />
//         </form>

//         <button className={styles.primaryBtn} id='save' onClick ={handleSubmit}>Save</button>
//         {isOpen && <Modal setIsOpen={setIsOpen} color={'#d0fefd'} information={'Information'} commentary={'Employee Created !'} action={'Close'} />}

//       </div>
//     </div>
//   )
  
// }

// export default Home;




import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCreateEmployeeMutation } from '../redux/apiSlice'
import styles from './style/Home.module.css'
import Select from 'react-select'
import { stateService } from '../_service/StateService'
import { departmentService } from '../_service/DepartmentService'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Modal } from '@k90891695/modalnpm'

const dataState = await stateService.getAllStates()
const dataS = dataState.data

const dataDepartment = await departmentService.getAllDepartments()
const dataD = dataDepartment.data

function Home() {
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
  const [employeeForm] = React.useState('Submit')

  const onSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, dateOfBirth, startDate, street, city, selectState, zipCode, selectDepartment } = e.target.elements

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
  }

    const State = selectState.label
    const Department = selectDepartment.label

  return (
    <div>
      {formSubmitError}
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" name="createemployee" onSubmit={onSubmit}>

          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName"/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName"/>

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="text" id="dateOfBirth" 
            onClick={() => setShowBirthCalendar(!showBirthCalendar)} 
            value={clickBirthDateCalendar() || ''} 
            onChange={(e)=>setClickBirthDateCalendar(e.target.value)} 
          />
          {!showBirthCalendar &&
            <Calendar onChange={setDateOfBirth} value={dateOfBirth}/>
          }
          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="text" 
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
            <input id="street" type="text"/>

            <label htmlFor="city">City</label>
            <input id="city" type="text"/>

            <h3>State</h3>
            <Select 
              className='data-state'
              classNamePrefix='selectState'
              options={dataS} 
              onChange={setSelectState}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" type="number"/>
          </fieldset>

          <h3>Department</h3>
          <Select 
            className='data-department'
            classNamePrefix='selectDepartment'
            options={dataD} 
            onChange={setSelectDepartment}
          />

          <button className={styles.primaryBtn} id='save' type="submit">
            {/* Save */}
            {employeeForm}
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} color={'#d0fefd'} information={'Information'} commentary={'Employee Created !'} action={'Close'} />}
        </form>

      </div>
    </div>
  )
}
export default Home