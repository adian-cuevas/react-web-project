import { Route, Routes } from 'react-router-dom'
import { RouterLayout } from './common/RouterLayout'
import { RootPage } from './pages/root/RootPage'
import { DefaultCalendarPage } from './pages/Calendar/DefaultCalendarPage'

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
          element={<DefaultCalendarPage />}
        ></Route>
      </Route>
    </Routes>
  )
}
