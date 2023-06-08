import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './style/Calendar.css'

const CalendarDate = ({clickDateCalendar}) => {
  const [value, onChange] = useState(new Date())
  let clickDate = clickDateCalendar
  const NewDate =   new Date(value).toLocaleDateString()
  clickDate.value = NewDate

  return (
    <div >
      <Calendar onChange={onChange} />
    </div>
  )
}

export default CalendarDate