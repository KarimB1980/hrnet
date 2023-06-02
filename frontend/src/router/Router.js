import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import EmployeeList from '../pages/EmployeeList.js'
import ErrorPage from '../pages/ErrorPage'

// Creation of router
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path='employee-list' element={<EmployeeList />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default Router;