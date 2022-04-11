<template>
<div class="text-center w-75 m-auto">
    <h4 class="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
    <p class="text-muted mb-4">Enter your email address and password to access admin panel.</p>
</div>
<form @submit.prevent="m_Login">

    <div class="mb-3">
        <label for="emailaddress" class="form-label">Email address</label>
        <input type="text" v-model="form_user.email" class="form-control"  required="" placeholder="Enter your email">
    </div>

    <div class="mb-3">
        <a href="pages-recoverpw.html" class="text-muted float-end"><small>Forgot your password?</small></a>
        <label for="password" class="form-label">Password</label>
        <div class="input-group input-group-merge">
            <input type="password"  v-model="form_user.password" class="form-control" placeholder="Enter your password">
            <div class="input-group-text" data-password="false">
                <span class="password-eye"></span>
            </div>
        </div>
    </div>

    <div class="mb-3 mb-3">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="checkbox-signin" checked>
            <label class="form-check-label" for="checkbox-signin">Remember me</label>
        </div>
    </div>

    <div class="mb-3 mb-0 text-center">
        <button class="btn btn-primary" type="submit"> Log In </button>
    </div>

    
</form>

</template>

<script>
import Swal from 'sweetalert2'
import {ref} from 'vue'
import { useRouter} from 'vue-router'
import c_Auth from '../composables/c_Auth'
export default {
        
setup()
{
const router = useRouter()
const { a_loginUser} = c_Auth()
const form_user = ref({
        email: 'a3rxander@gmail.com',
        password: 'password',
    })

return {

    form_user,
    m_Login: async() => {

        const { ok , message} = await a_loginUser( form_user.value)
        if ( !ok ) Swal.fire('Error', message, 'error' )
        else 
        {
            router.push({ name:'articles_index'})
        }
    }
}

}

}
</script>