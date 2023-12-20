import { createStore } from 'vuex'

const store = createStore({
    state: {
        products: []
    },
    mutations: {
        getImgs(state, payload){
            state.products = payload
        },
        addImg(state, payload){
            state.products.push(payload)
        }
    },
    actions: {
        async getImgs({commit}){
           const response = await fetch('https://jsonplaceholder.typicode.com/photos')
           const result = await response.json()
           commit('getImgs', result.photos)
        }
    },



    getters: {
        
    }
})

export default store