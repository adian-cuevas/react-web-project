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
import { UserRegister } from '../../types/User'

type RegisterDialogType = {
  handleRegister: (user: UserRegister) => void
  handleClose: () => void
}
export const RegisterDialog: FC<RegisterDialogType> = ({
  handleRegister,
  handleClose,
}) => {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    carnetId: '',
    email: '',
    password: '',
    rePassword: '',
  })
  const handleUserData = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return (
    <Dialog
      open={true}
      onClose={handleClose}
    >
      <DialogTitle>Registro</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Registra una nueva cuenta y comienza a organizar tu trabajo como nunca
          antes
        </DialogContentText>
        <TextField
          autoFocus
          margin={'dense'}
          id={'name'}
          label={'Nombre'}
          type={'text'}
          fullWidth
          variant={'standard'}
          name={'name'}
          onChange={handleUserData}
        />
        <TextField
          margin={'dense'}
          id={'last_name'}
          label={'Apellidos'}
          type={'text'}
          fullWidth
          variant={'standard'}
          name={'lastName'}
          onChange={handleUserData}
        />
        <TextField
          margin={'dense'}
          id={'carnet_id'}
          label={'Carnet de Identidad'}
          type={'text'}
          fullWidth
          variant={'standard'}
          name={'carnetId'}
          onChange={handleUserData}
        />
        <TextField
          margin={'dense'}
          id={'email'}
          label={'Email'}
          type={'email'}
          fullWidth
          variant={'standard'}
          name={'email'}
          onChange={handleUserData}
        />
        <TextField
          margin={'dense'}
          id={'password'}
          label={'Password'}
          type={'password'}
          fullWidth
          variant={'standard'}
          name={'password'}
          onChange={handleUserData}
        />
        <TextField
          margin={'dense'}
          id={'re_password'}
          label={'Re-Password'}
          type={'password'}
          fullWidth
          variant={'standard'}
          name={'rePassword'}
          onChange={handleUserData}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleRegister(userData)
          }}
        >
          Registrar
        </Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  )
}
