import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { UserLogin } from '../../types/User'

type LoginDialogType = {
  handleLogin: (user: UserLogin) => void
  handleClose: () => void
}
export const LoginDialog: FC<LoginDialogType> = ({
  handleLogin,
  handleClose,
}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
    >
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Introduce los datos de usuari correctos para acceder.
        </DialogContentText>
        <TextField
          autoFocus
          margin={'dense'}
          id={'email'}
          label={'Email'}
          type={'email'}
          fullWidth
          variant={'standard'}
          name={'email'}
          onChange={handleDataChange}
        />
        <TextField
          margin={'dense'}
          id={'password'}
          label={'Password'}
          type={'password'}
          fullWidth
          variant={'standard'}
          name={'password'}
          onChange={handleDataChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleLogin(userData)
          }}
        >
          Login
        </Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}
