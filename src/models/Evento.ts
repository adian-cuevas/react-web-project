import { Recordatorio } from './Recordatorio'
import { User } from './User'

export type Evento = {
  nombre: string
  fecha: Date
  hora_de_inicio: Date
  descripcion: string
  hora_de_fin: Date
  invitados: User[]
  creador: User
  recordatorios: Recordatorio[]
}
