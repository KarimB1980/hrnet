import React from 'react'
import Select from 'react-select'
import { stateService } from '../_service/StateService'

const dataState = await stateService.getAllStates()
const data = dataState.data

const handleChange = (selected) => {
  console.log(selected.label);
  const state = document.getElementsByClassName('selectState__single-value')
  state.value = selected.label
}

const SelectState = () => (
  <>
    <h3>State</h3>
    <Select 
      className='data-state'
      classNamePrefix='selectState'
      options={data} 
      onChange={handleChange}
    />
  </>
)

export default SelectState