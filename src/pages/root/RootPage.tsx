import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { LoginDialog, RegisterDialog } from '../../components'
import { useState } from 'react'
import { UserLogin, UserRegister } from '../../types/User'

export const RootPage = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false)

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true)
  }
  const handleOpenRegisterDialog = () => {
    setOpenRegisterDialog(true)
  }
  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false)
  }
  const handleCloseRegisterDialog = () => {
    setOpenRegisterDialog(false)
  }
  const handleLogin = (user: UserLogin) => {
    alert(`${user.email}-${user.password}`)
    handleCloseLoginDialog()
  }
  const handleRegister = (user: UserRegister) => {
    alert(`${user.email}-${user.name}-${user.lastName}-${user.carnetId}`)
    handleCloseRegisterDialog()
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(94deg, #061341 14.22%, #262ad8 92.85%)',
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Grid
        sx={{
          width: '273px',
          position: 'absolute',
          left: '55px',
          top: '96px',
        }}
        spacing={2}
        container
        direction={'column'}
      >
        <Grid item>
          <Typography variant='h3'>K-lendar</Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2'>
            Calendario para modulo de Noswork
          </Typography>
        </Grid>
        <Grid item>
          <Stack
            direction={'row'}
            spacing={2}
          >
            <Button
              variant='contained'
              onClick={handleOpenLoginDialog}
            >
              Login
            </Button>
            <Button
              variant='outlined'
              onClick={handleOpenRegisterDialog}
            >
              Registrar
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ position: 'absolute', bottom: '-15px', right: '0px' }}>
        <img
          src='/public/Responsive Calendar.png'
          alt='Foto de Calendario'
        />
      </Box>
      <Box sx={{ position: 'absolute', top: '40px', right: '50px' }}>
        <img
          src='/public/Frame 65.png'
          alt='Calendario pequeño'
        />
      </Box>
      <Box sx={{ position: 'absolute', bottom: '-10px', right: '0px' }}>
        <img
          src='/public/Responsive Calendar (2).png'
          alt='Calendario pequeño'
        />
      </Box>
      <Box sx={{ position: 'absolute', bottom: '-10px', left: '50px' }}>
        <img
          src='/public/Responsive Calendar (1).png'
          alt='Calendario pequeño'
        />
      </Box>
      {openLoginDialog && (
        <LoginDialog
          handleLogin={handleLogin}
          handleClose={handleCloseLoginDialog}
        />
      )}
      {openRegisterDialog && (
        <RegisterDialog
          handleRegister={handleRegister}
          handleClose={handleCloseRegisterDialog}
        />
      )}
    </Box>
  )
}