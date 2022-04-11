import { createStore } from 'vuex'
import auth_storevuex from '../modules/auth/store'
import articles_storevuex from '../modules/articles/store'

const store= createStore ( {
  modules: {
    auth_storevuex,
    articles_storevuex
  }

} )

export default store
