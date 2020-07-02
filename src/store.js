import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
    state: {

        data: [
            {
                a: 1,
                b: 2,
                c: 3
            },
            {
                a: "a",
                b: "b",
                c: "c"
            },
            {
                a: "milk",
                b: "coffee",
                c: "sugar"
            },
        ]

    },

    getters: {

        getData ( state )
        {
            return state.data
        }

    },

    mutations: {

        updateData ( state, payload )
        {
            console.log( state, payload )

            state.data.push(payload)
        }

    },

    actions: {

    }
} )