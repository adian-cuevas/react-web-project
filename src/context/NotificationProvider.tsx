import { AlertColor } from '@mui/material'
import { FC, useState } from 'react'
import { Notification } from '../components'
import { NotificationContext } from './NotificationContext'

export const NotificationProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)

  const handleClose = () => {
    setOpen(false)
  }
  const configError = (msg: string) => {
    setOpen(true)
    setMsg(msg)
    setSeverity('error')
  }

  // const context = useContext(NotificationContext)
  return (
    <NotificationContext.Provider value={configError}>
      <Notification
        open={open}
        msg={msg}
        severity={severity}
        handleClose={handleClose}
      />
      {children}
    </NotificationContext.Provider>
  )
}
