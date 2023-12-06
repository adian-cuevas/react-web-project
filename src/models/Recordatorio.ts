import { User } from './User'

export type Recordatorio = {
  fecha_activacion: Date
  descripcion: string
  creador: User
}
