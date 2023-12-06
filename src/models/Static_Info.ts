export const avatarItems = [
  {
    name: 'Mi Cuenta',
    action: (handleClose: () => void) => {
      handleClose()
      alert('Ir a mi Cuenta')
    },
  },
  {
    name: 'Salir',
    action: (handleClose: () => void) => {
      handleClose()
      alert('Salir de la Aplicacion')
    },
  },
]
