import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { FC } from 'react'

export const NavBar: FC<object> = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Container maxWidth={'xl'}>
            <Grid
              container
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Grid item>
                <Typography>K-lendar</Typography>
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
