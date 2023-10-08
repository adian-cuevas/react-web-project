import { Route, Routes } from 'react-router-dom'
import { RouterLayout } from './common/RouterLayout'
import { HomePage } from './pages/home/HomePage'
import { LoginPage } from './pages/login/LoginPage'
import { RootPage } from './pages/root/RootPage'
// import { LoginDialogProvider } from './context/LoginDialogContext/LoginDialogProvider'

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<RootPage />}
      ></Route>
      <Route
        path={'/login'}
        element={<LoginPage />}
      ></Route>
      <Route
        path={'/home'}
        element={<RouterLayout />}
      >
        <Route
          path='/home'
          element={<HomePage />}
        ></Route>
      </Route>
    </Routes>
  )
}
