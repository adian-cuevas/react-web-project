import { FC } from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'

export const RouterLayout: FC<object> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
