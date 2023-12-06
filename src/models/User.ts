import { Calendario } from './Calendario'

export type User = {
  username: string
  email: string
  provider: string
  password: string
  resetPasswordToken: string
  confirmationToken: string
  confirmed: boolean
  blocked: boolean
  role: string
  calendarios: Calendario[]
}
