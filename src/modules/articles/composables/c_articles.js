import {ref} from 'vue'
import { useStore} from 'vuex'
import laravel9SanctumAPI from '../../../api/laravel9SanctumAPI'

const c_articles = () => {

    const store = useStore()
    const list_countries=ref([])
    const list_typesarticles=ref([])

    const a_createsalon =  async(form_data)=> {
        const resp = await store.dispatch('docentesalones_storevuex/a_createsalon', form_data)

        return resp
    }

    /*filler campos*/
    const getcountries =  async () => 
    { 
        const data = await laravel9SanctumAPI.get('/api/countries') 
        list_countries.value=data.data 
    }
    const getEstructura =  async () => 
    { 
        const data = await laravel9SanctumAPI.get('/api/typesarticles') 
        list_typesarticles.value=data.data 
    }

        getcountries()
        getEstructura() 

    return {
        a_createsalon,list_countries,list_typesarticles
    }
}

export default c_articles