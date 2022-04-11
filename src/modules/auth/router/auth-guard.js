import store from '@/store'


const isAuthenticatedGuard = async( to, from, next ) => {

    const { ok } = await store.dispatch('auth_storevuex/a_checkUser')
    if ( ok ) next()
    else next({ name: 'auth_login' })
}

export default isAuthenticatedGuard