import { Recordatorio } from './Recordatorio'
import { User } from './User'

export type Tarea = {
  nombre: string
  descripcion: string
  fecha: Date
  hora_inicio: Date
  hora_fin: Date
  completado: boolean
  recordatorios: Recordatorio[]
  creador: User
}
