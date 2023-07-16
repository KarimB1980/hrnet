import { useGetAllEmployeesQuery } from "../redux/apiSlice"
import React, { useState, useEffect } from "react"
import DataTable, { createTheme } from "react-data-table-component"
import DataTableExtensions from "react-data-table-component-extensions"
import "react-data-table-component-extensions/dist/index.css"
import "./style/Employees.css"

// createTheme creates a new theme named space that overrides the build in dark theme
createTheme('space', {
  background: {
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

// create table columns
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
    wrap: true,
    minWidth: '150px'
  },
]

const EmployeesList = () => {
  // recovery of employees
  const { data, error, isLoading, refetch } = useGetAllEmployeesQuery()
  const [employeesData, setEmployeesData] = useState([])

  // Refreshing the list of employees
  useEffect(() => {
    refetch()
    setEmployeesData(data)
  }, [refetch, data])

  const tableData = {
    columns,
    data
  }

  return (
    <div className="main">
      {isLoading && <div className="loadingerror">Loading...</div>}
      {error && <div className="loadingerror">An error has occurred, we apologize for the inconvenience caused.</div>}
      <DataTableExtensions 
        print={false}
        export={false}
        {...tableData}
      >
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
          theme="space"
        />
      </DataTableExtensions>
    </div>
  )
}

export default EmployeesList