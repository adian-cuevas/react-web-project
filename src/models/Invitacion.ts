import { Evento } from './Evento'
import { User } from './User'

type Estado = 'pendiente' | 'aceptado' | 'rechazado'

export type Invitacion = {
  evento: Evento
  Estado: Estado
  fecha_envio: Date
  mensaje: string
  invitados: User[]
}
