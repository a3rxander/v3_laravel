import { computed } from 'vue'
import { useStore} from 'vuex'

const c_Auth = () => {

    const store = useStore()

    const a_createUser =  async(user)=> {
        const resp = await store.dispatch('auth_storevuex/a_createUser', user)
        return resp
    }

    const a_loginUser = async(user) => {
        const resp = await store.dispatch('auth_storevuex/a_loginUser',user)
        return resp
    }

    const a_checkUser = async() => {
        console.log("dsada")
        const resp = await store.dispatch('auth_storevuex/a_checkUser')
        return resp
    }

    return {
        a_checkUser,
        a_loginUser,
        a_createUser,

        g_statusAuth:computed(()=>store.getters['auth_storevuex/g_statusAuth'] )
    }
}

export default c_Auth