import * as types from './mutation-types'

export default {
    [types.SET_TOKEN] (state, payload) {
        state.accessToken = payload    
    }
}