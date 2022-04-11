

export default {

    name:'auth',
    component:()=>  import(/* webpackChuckName: "auth layout"*/ '@/modules/auth/layout/AuthLayout.vue'),
    children: [
        {
            path:'',
            name:'auth_login',
            component:()=> import(/* webpackChuckName: "auth login"*/ '@/modules/auth/views/Login.vue')
        },
        
        {
            path:'',
            name:'auth_register',
            component:()=> import(/* webpackChuckName: "auth register"*/ '@/modules/auth/views/Register.vue')
        }
    ]

}