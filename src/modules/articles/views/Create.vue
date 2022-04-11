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
                <h4 class="page-title">Crear Salón de Clase</h4>
            </div>
        </div>
    </div>
    <!-- end page title --> 


    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Ingrese los valores</h4>
                    <p class="text-muted font-14">
                        Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                    </p>
 
                    <div class="row">
                                <div class="col-lg-12">
                                    <form @submit.prevent="submit_crear">
                                        <div class="mb-3">
                                            <label for="simpleinput" class="form-label">Nombre del colegio: </label>
                                            <input type="text" v-model="form_data.escuela" placeholder="Escuela Bilingue ..." class="form-control">
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Grado</label>
                                            <select class="form-select" v-model="form_data.grado">        
                                                <option v-for="item in list_estructuras" :key="item.id" :value="item.id">{{item.v_name}}</option>
                                            </select>
                                        </div>

                                        <div class="mb-3">
                                            <label  class="form-label">Salón</label>
                                            <input type="text" v-model="form_data.salon" placeholder="A" class="form-control">
                                        </div> 
                                        
  
                                        <div class="mb-0">
                                            <label class="form-label">Asignatura</label>
                                            <select class="form-select" v-model="form_data.asignatura">
                                                <option v-for="item in list_asignaturas" :key="item.id" :value="item.id">{{item.v_name}}</option>
                                            </select>
                                            <span class="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
                                        </div>
 
                                        <div class="justify-content-end row">
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-info">Crear</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> <!-- end col -->
                            </div>
                            <!-- end row-->   
                </div> <!-- end card-body -->
            </div> <!-- end card -->
        </div><!-- end col -->
    </div><!-- end row -->

</div> <!-- container-fluid -->
</template>

<script>

import {ref} from 'vue'
import { useRouter} from 'vue-router'
import c_articles from '../composables/c_articles'
import Swal from 'sweetalert2'
export default {
        
setup()
{
const form_data = ref({ escuela:'Bilingue Vista Alegre',grado:null,salon:'A',asignatura:null})
const router = useRouter()
const { a_createsalon, list_asignaturas,list_estructuras} = c_articles()

return {

    form_data,list_asignaturas,list_estructuras,
    submit_crear: async() => {

            Swal.fire({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()
            console.log("inicio")
        const { ok , message} = await a_createsalon( form_data.value)
            console.log("fin")

        console.log(message)
        if ( !ok ) Swal.fire('Error', message, 'error' )
        else
        {
            
            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')
            router.push({ name:'salones_index'}) 
        }
    }
}

}

}
</script>