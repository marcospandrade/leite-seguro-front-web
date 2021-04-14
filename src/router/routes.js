import {
    routes as auth
} from '@/modules/auth'
import {
    routes as landing
} from '@/pages/landing'
import {
    routes as dashboard
} from '@/modules/dashboard'

export default [
    ...landing,
    ...auth,
    ...dashboard
]