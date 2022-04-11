

export default {

    name:'articles',
    component:()=>  import(/* webpackChuckName: "articles layout"*/ '@/modules/articles/layout/articlesLayout.vue'),
    children: [
        {
            path:'',
            name:'articles_index',
            component:()=> import(/* webpackChuckName: "articles_index"*/ '@/modules/articles/views/Index.vue')
        },
        
        {
            path:'create',
            name:'articles_create',
            component:()=> import(/* webpackChuckName: "articles_create"*/ '@/modules/articles/views/Create.vue')
        }
    ]
}