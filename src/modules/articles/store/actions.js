import laravel9SanctumAPI from '../../../api/laravel9SanctumAPI'

export const a_createsalon = async ({ commit}, form_data) => {
    const {escuela,grado,salon,asignatura} = form_data
    try
    {
        await laravel9SanctumAPI.post('/api/articles',{escuela,grado,salon,asignatura});
        commit('m_loginsalon',{salon})
        return {ok:true}

    }catch(error)
    {
        if (error.message) return {ok:false, message:error.message}
        else return {ok:false, message:"Lo sentimos, hubo un error inesperado."}
    }
}

 