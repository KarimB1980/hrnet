import { useGetAllEmployeesQuery } from "../redux/apiSlice"
import React, { useState, useEffect } from "react"
import DataTable, { createTheme } from "react-data-table-component"
import DataTableExtensions from "react-data-table-component-extensions"

import "react-data-table-component-extensions/dist/index.css"
import "./style/Employees.css"

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {
  text: {
    // primary: '#268bd2',
    // secondary: '#2aa198',
    // shadow: '#FC0 1px 0 10px'
  },
  background: {
    // default: '#002b36',
    default: 'transparent',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

const columns = [
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true,
    wrap: true,
    minWidth: '150px' 
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true,
    wrap: true,
    minWidth: '150px'
  },
  {
    name: 'Start Date',
    selector: row => row.startDate,
    sortable: true,
    wrap: true,
    minWidth: '150px'
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true,
    wrap: true,
    minWidth: '150px'

  },
  {
    name: 'Date of Birth',
    selector: row => row.dateOfBirth,
    sortable: true,
    wrap: true,
    minWidth: '150px'
  },
  {
    name: 'Street',
    selector: row => row.street,
    sortable: true,
    wrap: true
  },
  {
    name: 'City',
    selector: row => row.city,
    sortable: true,
    wrap: true,
    minWidth: '150px'
  },
  {
    name: 'State',
    selector: row => row.state,
    sortable: true,
    wrap: true,
    minWidth: '150px'
  },
  {
    name: 'Zip Code',
    selector: row => row.zipCode,
    sortable: true,
    wrap: true
  },
];

function EmployeesList() {

  const { data, error, isLoading, refetch } = useGetAllEmployeesQuery()
  const [employeesData, setEmployeesData] = useState([])

  useEffect(() => {
    refetch()
    setEmployeesData(data)
  }, [refetch, data])

  const tableData = {
    columns,
    data
  };

  return (
    <div className="main">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={
            columns
          }
          data={employeesData}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          theme="solarized"
        />
      </DataTableExtensions>
    </div>
  )
}

export default EmployeesList