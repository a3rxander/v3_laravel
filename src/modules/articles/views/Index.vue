<template>

<div class="container-fluid">
                        
    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Inicio</a></li>
                        <li class="breadcrumb-item active">Salones</li>
                    </ol>
                </div>
                <h4 class="page-title">Salones</h4>
            </div>
        </div>
    </div>
    <!-- end page title --> 


    <div class="row mb-2">
        <div class="col-sm-4">
             <router-link :to="{ name: 'salones_create'}" class="btn btn-danger rounded-pill mb-3">
                <i class="mdi mdi-plus"></i> Create Project</router-link>
        </div>
        <div class="col-sm-8">
        </div><!-- end col-->
    </div> 
    <!-- end row-->

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Lista de Salones de Clases</h4>
                    <p class="text-muted font-14">
                        Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                    </p>
 
                    <div class="row">
                        <div class="col-lg-12">
                            <table class="table table-centered mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Date of Birth</th>
                                        <th>Active?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Risa D. Pearson</td>
                                        <td>336-508-2157</td>
                                        <td>July 24, 1950</td>
                                        <td>
                                            <!-- Switch-->
                                            <div>
                                                <input type="checkbox" id="switch01" checked data-switch="success"/>
                                                <label for="switch01" data-on-label="Yes" data-off-label="No" class="mb-0 d-block"></label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div> <!-- container-fluid -->
</template>

<script>

import {ref} from 'vue'
import { useRouter} from 'vue-router'
import c_articles from '../composables/c_articles'
export default {
        
setup()
{
const router = useRouter()
const { a_loginUser} = c_articles()
const form_user = ref({
        email: 'a3rxander@gmail.com',
        password: 'password',
    })

return {

    form_user,
    m_Login: async() => {

        const { ok , message} = await a_loginUser( form_user.value)

        console.log(ok)
        if (!ok)
        {   
            console.log(message)
        } 
        else 
        {
            router.push({ name:'About'})
        }
    }
}

}

}
</script>