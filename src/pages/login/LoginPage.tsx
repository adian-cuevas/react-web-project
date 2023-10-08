import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { User } from '../../types/User'
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

export const LoginPage: FC<object> = () => {
  const [userData, setUserData] = useState<User>({
    email: '',
    password: '',
  })
  const dataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData)
  }
  return (
    <Container maxWidth={'sm'}>
      <Grid
        container
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography
              variant={'h4'}
              sx={{ mt: 1, mb: 1 }}
            >
              Inicio de Sesion
            </Typography>
            <Box
              component={'form'}
              onSubmit={handleSubmit}
            >
              <Stack>
                <TextField
                  type={'email'}
                  margin={'normal'}
                  required
                  fullWidth
                  name={'username'}
                  label={'Email'}
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataChange}
                />
                <TextField
                  type={'password'}
                  margin={'normal'}
                  required
                  fullWidth
                  name={'password'}
                  label={'Password'}
                  sx={{ mt: 1.5, mb: 1.5 }}
                  onChange={dataChange}
                />
              </Stack>
              <Button
                variant={'contained'}
                fullWidth
                type={'submit'}
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar Sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
