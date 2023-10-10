import { FC, useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'
import { Box } from '@mui/material'

export const RouterLayout: FC<object> = () => {
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(!open)
  }
  useEffect(() => {}, [open])
  return (
    <Box sx={{ display: 'flex' }}>
      {open && <SideBar open={open} />}
      <Box sx={{ width: '100%' }}>
        <NavBar handleDrawerOpen={handleDrawerOpen} />
        <Box sx={{ p: 5 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
