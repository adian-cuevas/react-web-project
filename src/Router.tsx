import { Route, Routes } from 'react-router-dom'
import { RouterLayout } from './common/RouterLayout'
import { RootPage } from './pages/root/RootPage'
import { CalendarPage } from './pages/Calendar/CalendarPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<RootPage />}
      ></Route>
      <Route
        path={'/calendario'}
        element={<RouterLayout />}
      >
        <Route
          path='/calendario'
          element={<CalendarPage />}
        ></Route>
      </Route>
    </Routes>
  )
}
