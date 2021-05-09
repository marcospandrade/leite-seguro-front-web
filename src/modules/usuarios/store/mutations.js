import * as types from './mutation-types'

export default {
    [types.SET_USUARIOS] (state, payload) {
        state.usuarios.push(payload);    
    }
}