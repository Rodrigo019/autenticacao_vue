import { routes as auth } from '../modules/auth'
import { routes as home } from '../modules/home'
import { routes as user } from '../modules/user'

export default [
    ...auth,
    ...home,
    ...user
]