import { routes as auth } from '../modules/auth'
import { routes as home } from '../modules/home'

export default [
    ...auth,
    ...home
]