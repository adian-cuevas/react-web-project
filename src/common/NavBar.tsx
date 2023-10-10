import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { FC } from 'react'

type NavBarProps = {
  handleDrawerOpen: () => void
}

export const NavBar: FC<NavBarProps> = ({ handleDrawerOpen }) => {
  return (
    <Box>
      <AppBar position={'sticky'}>
        <Toolbar>
          <Container maxWidth={'xl'}>
            <Grid
              container
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Grid item>
                <Stack
                  spacing={2}
                  direction={'row'}
                  alignItems={'center'}
                >
                  <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant={'h4'}>K-lendar</Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack
                  spacing={2}
                  direction={'row'}
                >
                  <Button variant={'contained'}>Login</Button>
                  <Button variant={'outlined'}>Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
