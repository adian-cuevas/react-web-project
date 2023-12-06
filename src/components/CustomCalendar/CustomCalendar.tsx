import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
} from '@fullcalendar/core/index.js'
import { useState } from 'react'
import { useGlobalStore } from '../../store/globalStore'

type CalendarState = {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}
export const CustomCalendar = () => {
  const drawerOpen = useGlobalStore((state) => state.drawerOpen)
  const [calendarState, setCalendarState] = useState<CalendarState>({
    weekendsVisible: true,
    currentEvents: [],
  })

  // handleWeekendsToggle = () => {
  //   setCalendarState({
  //     ...calendarState,
  //     weekendsVisible: !calendarState.weekendsVisible,
  //   })
  // }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    drawerOpen
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Math.random().toString(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events: EventApi[]) => {
    setCalendarState({ ...calendarState, currentEvents: events })
  }
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      initialView='dayGridMonth'
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={calendarState.weekendsVisible}
      initialEvents={''} // alternatively, use the `events` setting to fetch from a feed
      select={handleDateSelect}
      // eventContent={renderEventContent} // custom render function
      eventClick={handleEventClick}
      eventsSet={handleEvents} // called after events are initialized/added/changed/removed
      eventAdd={function () {}}
      eventChange={function () {}}
      eventRemove={function () {}}
    />
  )
}
