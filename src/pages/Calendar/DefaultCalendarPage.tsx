import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export const DefaultCalendarPage = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
      />
    </>
  )
}
