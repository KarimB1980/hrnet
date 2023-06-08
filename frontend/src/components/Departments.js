import React from 'react'
import Select from 'react-select'
import { departmentService } from '../_service/DepartmentService'

const dataDepartment = await departmentService.getAllDepartments()
const data = dataDepartment.data
// console.log(data)

const handleChange = (selected) => {
  const department = document.getElementsByClassName('selectDepartement__single-value')
  department.value = selected.value
}

const SelectDepartment = () => (
  <>
    <h3>Department</h3>
    <Select 
      className='data-department'
      classNamePrefix='selectDepartment'
      options={data} 
      onChange={handleChange}
    />
  </>
)

export default SelectDepartment