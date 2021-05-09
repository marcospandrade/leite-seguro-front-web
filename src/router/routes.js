import {
    routes as auth
} from '@/modules/auth'
import {
    routes as landing
} from '@/pages/landing'
import {
    routes as dashboard
} from '@/modules/dashboard'
import {
    routes as perfil
} from '@/modules/perfil'
import {
    routes as relatorios
} from '@/modules/relatorios'
import {
    routes as usuarios
} from '@/modules/usuarios'

export default [
    ...landing,
    ...auth,
    ...dashboard,
    ...perfil,
    ...relatorios,
    ...usuarios
]