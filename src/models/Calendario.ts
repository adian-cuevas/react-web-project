import { Evento } from './Evento'
import { Tarea } from './Tarea'
import { User } from './User'

export type Calendario = {
  nombre: string
  eventos: Evento[]
  tareas: Tarea[]
  publico: boolean
  creador: User
  subscriptores: User[]
}
