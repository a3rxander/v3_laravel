export const m_loginuser = (state , {user}) => 
{
    if ( user.email ) {
        localStorage.setItem( 'email', user.email )
    }

    delete user.password

    state.user = user
    state.status= 'authenticated'
}

export const m_logout = (state) => 
{
    state.user = null
    state.statusAuth= 'not-authenticated'
}