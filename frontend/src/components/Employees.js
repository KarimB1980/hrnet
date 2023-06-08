import { useGetAllEmployeesQuery } from "../redux/apiSlice"
import React, { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import DataTableExtensions from "react-data-table-component-extensions"
import "react-data-table-component-extensions/dist/index.css"
import "./style/Employees.css"

const columns = [
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: row => row.startDate,
    sortable: true,
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: row => row.dateOfBirth,
    sortable: true,
  },
  {
    name: 'Street',
    selector: row => row.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: row => row.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: row => row.state,
    sortable: true,
  },
  {
    name: 'Zip Code',
    selector: row => row.zipCode,
    sortable: true,
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
          columns={columns}
          data={employeesData}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div>
  )
}

export default EmployeesList