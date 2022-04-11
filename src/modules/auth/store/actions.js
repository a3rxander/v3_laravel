import laravel9SanctumAPI from "../../../api/laravel9SanctumAPI";

export const a_createUser = async ({ commit}, user) => {
    const {name,email,password} = user
    const password_confirmation=password
    try
    {
        await laravel9SanctumAPI.get('/sanctum/csrf-cookie')

        laravel9SanctumAPI.post('/api/register',{email,password,password_confirmation,name})
        
        delete user.password
        commit('m_loginuser',{user})
        return {ok:true} 
    }catch(error)
    {
        return {ok:false, message: error.response.data.message}
    }
}

export const a_loginUser = async ({ commit}, user) => {

    const {email,password} = user
    const device_name='android'
    try
    {

            await laravel9SanctumAPI.get('/sanctum/csrf-cookie')

            const token= await laravel9SanctumAPI.post('/login',{email,password,device_name});

            console.log(token)
            commit('m_loginuser',{user})
            return {ok:true, message:"logged"}


            /*await laravel9SanctumAPI.get('/sanctum/csrf-cookie').then(response => {
            laravel9SanctumAPI.post('/login', {email,password})
            .then(responsed => {

            console.log(responsed)

            commit('m_loginuser',{user})
            return {ok:true, message:"logged"}
            })

            console.log(response)
            })*/
         
        
    }catch(error)
    {
        if (error.response.data.message) return {ok:false, message:error.response.data.message}
        else if(error.message) return {ok:false, message:error.message}
        else return {ok:false, message:"Lo sentimos, hubo un error inesperado."}
    }
}


export const a_checkUser = async ({ commit}) => {

    const email  = localStorage.getItem('email')
 
    
    if( !email ) {
        commit('m_logout')
        return { ok: false, message: 'No hay token' }
    } 
    else
    return { ok: true, message : 'Logged' }
 
}