import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'
import { Box } from '@mui/material'
import { useGlobalStore } from '../store/globalStore'

export const RouterLayout = () => {
  const drawerOpen = useGlobalStore((state) => state.drawerOpen)
  return (
    <Box sx={{ display: 'flex' }}>
      {drawerOpen && <SideBar open={drawerOpen} />}
      <Box sx={{ width: '100%' }}>
        <NavBar />
        <Box sx={{ p: 5 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
