import { Button, Container } from '@mui/material'
import { FC, useContext } from 'react'
import { NotificationContext } from '../../context/NotificationContext'

export const HomePage: FC<object> = () => {
  const context = useContext(NotificationContext)
  const handleClick = () => {
    if (!context) throw new Error('No existe contexto')
    context('Este es mi mensaje de error')
  }
  return (
    <>
      <Container
        sx={{ mt: 1 }}
        maxWidth={'xl'}
      >
        <Button
          fullWidth
          variant={'contained'}
          onClick={handleClick}
        >
          HomePage
        </Button>
      </Container>
    </>
  )
}
