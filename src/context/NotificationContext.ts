import { createContext } from 'react'

export const NotificationContext = createContext<
  ((msg: string) => void) | null
>(null)
