import { FC, useState } from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'
import { Box, Container } from '@mui/material'

export const RouterLayout: FC<object> = () => {
  const [open, setOpen] = useState(true)
  const handleDrawerOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {open && <SideBar open={open} />}
        <Box sx={{ width: '100%' }}>
          <NavBar handleDrawerOpen={handleDrawerOpen} />
          <Container sx={{ mt: 1 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  )
}
